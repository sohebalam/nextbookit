import { combineReducers } from "redux"

import {
  bookedDatesReducer,
  bookingCheckReducer,
  bookingDetailsReducer,
  bookingsReducer,
} from "./reducers/bookingReducers"

import {
  allRoomsReducer,
  roomDetailsReducer,
  checkReviewReducer,
  newReviewReducer,
} from "./reducers/roomReducers"
import {
  forgotPasswordReducer,
  profileReducer,
  registerReducer,
  regSocialReducer,
  resetPasswordReducer,
  updateProfileReducer,
} from "./reducers/userReducers"

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  register: registerReducer,
  profile: profileReducer,
  update: updateProfileReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  regSocial: regSocialReducer,
  checkBooking: bookingCheckReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
  // roomReview: roomReviewsReducer,
  // deleteReviews: deleteReviewsReducer,
  checkReview: checkReviewReducer,
  // review: reviewReducer,
})

export default reducer
