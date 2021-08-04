import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

import { getRoomDetails } from "../../redux/actions/roomActions"

import { wrapper } from "../../redux/store"

import { useDispatch, useSelector } from "react-redux"

import { toast } from "react-toastify"
import axios from "axios"
import { Container, Grid, Typography } from "@material-ui/core"
import { clearErrors } from "../../redux/actions/roomActions"

import { Carousel } from "react-bootstrap"
import RoomFeatures from "../../components/room/RoomFeatures"
import { Box } from "@material-ui/core"

const RoomDetails = () => {
  const dispatch = useDispatch()

  const roomDetails = useSelector((state) => state.roomDetails)
  const { error, room } = roomDetails

  // console.log(room)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors)
    }
  }, [])

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
            <div>
              <h3>Description</h3>
              <p>{room.description}</p>

              <RoomFeatures room={room} />
              {/* <div>
                <h3 className="mb-4">Features:</h3>
                <div className="room-feature">
                  <i
                    className="fa fa-cog fa-fw fa-users"
                    aria-hidden="true"
                  ></i>
                  <p>{room.guestCapacity}</p>
                </div>

                <div className="room-feature">
                  <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
                  <p>{room.numOfBeds}</p>
                </div>

                <div className="room-feature">
                  <i className="fa fa-cog fa-fw fa-bath" aria-hidden="true"></i>
                  <p>2 Baths</p>
                </div>

                <div className="room-feature">
                  <i
                    className="fa fa-cog fa-fw fa-cutlery"
                    aria-hidden="true"
                  ></i>
                  <p>Kitchen</p>
                </div>
              </div> */}
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="booking-card shadow-lg p-4">
                <p className="price-per-night">
                  <b>£{room.pricePerNight}</b> / night
                </p>

                <button className="btn btn-block py-3 booking-btn">Pay</button>
              </div>
            </div>
          </div>
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
