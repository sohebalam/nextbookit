import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import NewReview from "../../components/review/NewReview"
import { getRoomDetails } from "../../redux/actions/roomActions"

import { wrapper } from "../../redux/store"

import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import axios from "axios"
import { Button, Container, Grid, List, Typography } from "@material-ui/core"
import { clearErrors } from "../../redux/actions/roomActions"
import {
  bookingCheck,
  getBookedDates,
} from "../../redux/actions/bookingActions"
import { CHECK_BOOKING_RESET } from "../../redux/constants/bookingTypes"
import { Carousel } from "react-bootstrap"
import RoomFeatures from "../../components/room/RoomFeatures"
import { Box } from "@material-ui/core"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/dist/client/router"
import { Alert } from "@material-ui/lab"
import getStripe from "../../utils/getStripe"
import ListReviews from "../../components/review/ListReviews"
const RoomDetails = () => {
  const [checkInDate, setCheckInDate] = useState()
  const [checkOutDate, setCheckOutDate] = useState()
  const [daysOfStay, setDaysOfStay] = useState()
  const [paymentLoading, setPaymentLoading] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const roomDetails = useSelector((state) => state.roomDetails)
  const { error, room } = roomDetails

  const checkBooking = useSelector((state) => state.checkBooking)
  const { loading: bookingLoading, available } = checkBooking

  const profile = useSelector((state) => state.profile)

  const { dbUser } = profile

  const bookedDates = useSelector((state) => state.bookedDates)
  const { dates } = bookedDates

  const excludedDates = []

  dates.map((date) => {
    excludedDates.push(new Date(date))
  })

  // console.log(available, dbUser)
  // console.log(room)
  const { id } = router.query

  useEffect(() => {
    dispatch(getBookedDates(id))
    toast.error(error)
    dispatch(clearErrors())
    return () => {
      dispatch({ type: CHECK_BOOKING_RESET })
    }
  }, [dispatch, id])

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates

    setCheckInDate(checkInDate)
    setCheckOutDate(checkOutDate)

    if (checkInDate && checkOutDate) {
      const days = Math.floor(
        (new Date(checkOutDate) - new Date(checkInDate)) / 86400000 + 1
      )

      setDaysOfStay(days)

      dispatch(
        bookingCheck(id, checkInDate.toISOString(), checkOutDate.toISOString())
      )
    }
  }

  // const newBookingHandler = async () => {
  //   const bookingData = {
  //     room: id,
  //     checkInDate,
  //     checkOutDate,
  //     daysOfStay,
  //     amountPaid: 90,
  //     paymentInfo: {
  //       id: "STRIPE_PAYMENT_ID",
  //       status: "STRIPE_PAYMENT_STATUS",
  //     },
  //   }

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //     const { data } = await axios.post(
  //       `/api/bookings/bookings`,
  //       bookingData,
  //       config
  //     )

  //     // console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const bookedRoom = async (id, pricePerNight) => {
    setPaymentLoading(true)
    const amount = pricePerNight * daysOfStay
    try {
      const link = `/api/checkout/${id}?checkInDate=${checkInDate.toISOString()}&checkOutDate=${checkOutDate.toISOString()}&daysOfStay=${daysOfStay}`
      const { data } = await axios.get(link, { params: { amount } })

      const stripe = await getStripe()

      stripe.redirectToCheckout({ sessionId: data.id })
      setPaymentLoading(false)
    } catch (error) {
      setPaymentLoading(false)
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <>
      <Container>
        <Head>
          <title>{room.name} - bookit</title>
        </Head>
        <Grid container>
          <Box component="span" m={1}>
            <h2>{room.name} </h2>
          </Box>
          <br />
          <Box component="span" m={1}>
            <h6>{room.address}</h6>
          </Box>
          <Grid container>
            <Image
              src={room.images[0].url}
              className="d-block w-100 property-details-image m-auto"
              alt="Hotel"
              height={1500}
              width={2500}
            />
          </Grid>
          <Grid item style={{ marginTop: "1rem" }}>
            <Typography id="no_of_reviews">
              Number of Reviews{"    "}
              {room.numOfReviews ? room.numOfReviews : "   No reviews yet"}
            </Typography>
          </Grid>

          <div>
            <h3>Description</h3>
            <p>{room.description}</p>
          </div>
          <Grid container>
            <Grid item sm={8}>
              <RoomFeatures room={room} />
            </Grid>
            <Grid item sm={4}>
              <div className="booking-card shadow-lg p-4">
                <Container maxWidth="xs">
                  <p className="price-per-night">
                    <b>£{room.pricePerNight}</b> / night
                  </p>
                  <DatePicker
                    className="w-100"
                    selected={checkInDate}
                    onChange={onChange}
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={new Date()}
                    excludeDates={excludedDates}
                    selectsRange
                    inline
                  />
                  <Box style={{ marginRight: "4rem", marginTop: "0.5rem" }}>
                    {available === true && (
                      <Alert severity="info">
                        Room is available. Book Now.
                      </Alert>
                    )}
                    {available === false && (
                      <Alert severity="warning">
                        Room not available. Try different dates.
                      </Alert>
                    )}

                    {available && !dbUser && (
                      <Alert severity="warning">Login to book room.</Alert>
                    )}
                  </Box>
                  {available && dbUser && (
                    <Box style={{ marginRight: "4rem", marginTop: "0.5rem" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => bookedRoom(room._id, room.pricePerNight)}
                        disabled={
                          bookingLoading || paymentLoading ? true : false
                        }
                      >
                        Pay - £{daysOfStay * room.pricePerNight}
                      </Button>
                    </Box>
                  )}
                </Container>
                <NewReview />
              </div>
            </Grid>
          </Grid>
          {room.reviews && room.reviews.length > 0 ? (
            <ListReviews reviews={room.reviews} />
          ) : (
            <p>
              <b>No Reviews on this room</b>
            </p>
          )}
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(getRoomDetails(req, query.id))
    }
)
export default RoomDetails
