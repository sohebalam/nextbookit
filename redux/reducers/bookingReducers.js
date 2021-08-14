import {
  BOOKED_DATES_FAIL,
  BOOKED_DATES_SUCCESS,
  CHECK_BOOKING_FAIL,
  CHECK_BOOKING_REQUEST,
  CHECK_BOOKING_SUCCESS,
  MY_BOOKINGS_FAIL,
  MY_BOOKINGS_SUCCESS,
  CLEAR_ERRORS,
  BOOKING_DETAILS_FAIL,
  BOOKING_DETAILS_SUCCESS,
  ADMIN_BOOKING_REQUEST,
  ADMIN_BOOKING_SUCCESS,
  ADMIN_BOOKING_FAIL,
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
  DELETE_BOOKING_RESET,
  CHECK_BOOKING_RESET,
} from "../constants/bookingTypes"

export const bookingCheckReducer = (
  state = { loading: false, available: null },
  action
) => {
  switch (action.type) {
    case CHECK_BOOKING_REQUEST:
      return { loading: true }
    case CHECK_BOOKING_SUCCESS:
      return { loading: false, available: action.payload }
    case CHECK_BOOKING_RESET:
      return { loading: false, available: null }
    case CHECK_BOOKING_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const bookedDatesReducer = (state = { dates: [] }, action) => {
  switch (action.type) {
    case BOOKED_DATES_SUCCESS:
      return { loading: false, dates: action.payload }
    case BOOKED_DATES_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export const bookingsReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case MY_BOOKINGS_SUCCESS:
      return { loading: false, bookings: action.payload }
    case MY_BOOKINGS_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const bookingDetailsReducer = (state = { booking: {} }, action) => {
  switch (action.type) {
    case BOOKING_DETAILS_SUCCESS:
      return {
        loading: false,
        booking: action.payload,
      }

    case BOOKING_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export const adminBookingsReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case ADMIN_BOOKING_REQUEST:
      return { loading: true }
    case ADMIN_BOOKING_SUCCESS:
      return { loading: false, bookings: action.payload }
    case ADMIN_BOOKING_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const deleteBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BOOKING_REQUEST:
      return { loading: true }
    case DELETE_BOOKING_SUCCESS:
      return { loading: false, isDeleted: action.payload }
    case DELETE_BOOKING_RESET:
      return { isDeleted: false }
    case DELETE_BOOKING_FAIL:
      return { loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
