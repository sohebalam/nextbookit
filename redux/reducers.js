import { combineReducers } from "redux"

import {
  adminBookingsReducer,
  bookedDatesReducer,
  bookingCheckReducer,
  bookingDetailsReducer,
  bookingsReducer,
  deleteBookingReducer,
} from "./reducers/bookingReducers"

import {
  allRoomsReducer,
  roomDetailsReducer,
  checkReviewReducer,
  newReviewReducer,
  allAdminRoomsReducer,
  newRoomReducer,
  updateRoomReducer,
  deleteRoomReducer,
  roomReviewsReducer,
  deleteReviewsReducer,
} from "./reducers/roomReducers"
import {
  allUsersReducer,
  deleteUserReducer,
  forgotPasswordReducer,
  profileReducer,
  registerReducer,
  regSocialReducer,
  resetPasswordReducer,
  updateProfileReducer,
  updateUserReducer,
  userDetailsReducer,
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
  roomReview: roomReviewsReducer,
  deleteReviews: deleteReviewsReducer,
  checkReview: checkReviewReducer,
  // review: reviewReducer,
  checkReview: checkReviewReducer,
  allAdminRooms: allAdminRoomsReducer,
  newRoom: newRoomReducer,
  updateRoom: updateRoomReducer,
  deleteRoom: deleteRoomReducer,
  adminBookings: adminBookingsReducer,
  deleteBooking: deleteBookingReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
})

export default reducer
