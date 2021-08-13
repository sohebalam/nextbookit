import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

import { getRoomDetails } from "../../redux/actions/roomActions"

import { wrapper } from "../../redux/store"

import { useDispatch, useSelector } from "react-redux"

import { toast } from "react-toastify"
import axios from "axios"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import { clearErrors } from "../../redux/actions/roomActions"

import { Carousel } from "react-bootstrap"
import RoomFeatures from "../../components/room/RoomFeatures"
import { Box } from "@material-ui/core"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/dist/client/router"

const RoomDetails = () => {
  const [checkInDate, setCheckInDate] = useState()
  const [checkOutDate, setCheckOutDate] = useState()
  const [daysOfStay, setDaysOfStay] = useState()
  const [paymentLoading, setPaymentLoading] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const roomDetails = useSelector((state) => state.roomDetails)
  const { error, room } = roomDetails

  // console.log(room)
  const { id } = router.query

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors)
    }
  }, [])

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates

    setCheckInDate(checkInDate)
    setCheckOutDate(checkOutDate)

    if (checkInDate && checkOutDate) {
      // Calclate days of stay

      //   console.log(checkInDate.toISOString(), checkOutDate.toISOString());

      const days = Math.floor(
        (new Date(checkOutDate) - new Date(checkInDate)) / 86400000 + 1
      )

      setDaysOfStay(days)

      // dispatch()
      // checkBooking(id, checkInDate.toISOString(), checkOutDate.toISOString())
      console.log(checkInDate.toISOString(), checkOutDate.toISOString())
    }
  }

  const newBookingHandler = async () => {
    const bookingData = {
      room: id,
      checkInDate,
      checkOutDate,
      daysOfStay,
      amountPaid: 90,
      paymentInfo: {
        id: "STRIPE_PAYMENT_ID",
        status: "STRIPE_PAYMENT_STATUS",
      },
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const { data } = await axios.post(
        `/api/bookings/bookings`,
        bookingData,
        config
      )

      console.log(data)
    } catch (error) {
      console.log(error)
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
          {/* <Grid item style={{ marginTop: "1rem" }}>
            <Carousel hover="pause">
              {room.images &&
                room.images.map((image) => (
                  <Carousel.Item key={image.public_id}>
                    <div style={{ width: "100%", height: "440px" }}>
                      <Image
                        className="d-block m-auto"
                        src={image.url}
                        alt={room.name}
                        layout="fill"
                      />
                    </div>
                  </Carousel.Item>
                ))}
            </Carousel>
          </Grid> */}

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
                    // excludeDates={excludedDates}
                    selectsRange
                    inline
                  />
                  <Box style={{ marginRight: "4rem", marginTop: "0.5rem" }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={newBookingHandler}
                    >
                      Pay
                    </Button>
                  </Box>
                </Container>
              </div>
            </Grid>
          </Grid>

          {/* <div className="reviews w-75">
            <h3>Reviews:</h3>
            <hr />
            <div className="review-card my-3">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <p className="review_user">by John</p>
              <p className="review_comment">Good Quality</p>

              <hr />
            </div>

            <div className="review-card my-3">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <p className="review_user">by John</p>
              <p className="review_comment">Good Quality</p>

              <hr />
            </div>
          </div> */}
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
