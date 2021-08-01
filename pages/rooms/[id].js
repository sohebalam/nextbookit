import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

import { Carousel } from "react-bootstrap"

import axios from "axios"

const RoomDetails = () => {
  return (
    <>
      <div class="container container-fluid">
        <h2 class="mt-5">2 bedroom Galiyaat view apartment.(one)</h2>

        <div class="ratings mt-auto mb-3">
          <div class="rating-outer">
            <div class="rating-inner"></div>
          </div>
          <span id="no_of_reviews">(5 Reviews)</span>
        </div>

        <img
          src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
          class="d-block w-100 property-details-image m-auto"
          alt="Hotel"
        />

        <div class="row my-5">
          <div class="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>
              We are offering fully furnished apartment with your all basic
              needs being fulfilled. It consists of 2 king size bed room with a
              beautiful view in the living room, it also has a fully operational
              kitchen with microwave and basic crockery. Beside all it has a
              amazing balcony infront of valley view.
            </p>

            <div class="features mt-5">
              <h3 class="mb-4">Features:</h3>
              <div class="room-feature">
                <i class="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
                <p>6 Guests</p>
              </div>

              <div class="room-feature">
                <i class="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
                <p>2 Beds</p>
              </div>

              <div class="room-feature">
                <i class="fa fa-cog fa-fw fa-bath" aria-hidden="true"></i>
                <p>2 Baths</p>
              </div>

              <div class="room-feature">
                <i class="fa fa-cog fa-fw fa-cutlery" aria-hidden="true"></i>
                <p>Kitchen</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="booking-card shadow-lg p-4">
              <p class="price-per-night">
                <b>$28</b> / night
              </p>

              <button class="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>

        <div class="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div class="review-card my-3">
            <div class="rating-outer">
              <div class="rating-inner"></div>
            </div>
            <p class="review_user">by John</p>
            <p class="review_comment">Good Quality</p>

            <hr />
          </div>

          <div class="review-card my-3">
            <div class="rating-outer">
              <div class="rating-inner"></div>
            </div>
            <p class="review_user">by John</p>
            <p class="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
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
