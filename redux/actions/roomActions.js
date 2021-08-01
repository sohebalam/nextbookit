import axios from "axios"
import absoluteUrl from "next-absolute-url"
import {
  ADMIN_ROOMS_FAIL,
  ADMIN_ROOMS_REQUEST,
  ADMIN_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  GET_REVIEWS_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_ROOM_FAIL,
  NEW_ROOM_REQUEST,
  NEW_ROOM_SUCCESS,
  REVIEW_AVAILABLE_FAIL,
  REVIEW_AVAILABLE_REQUEST,
  REVIEW_AVAILABLE_SUCCESS,
  ROOM_DETAILS_SUCCESS,
  UPDATE_ROOM_FAIL,
  UPDATE_ROOM_REQUEST,
  UPDATE_ROOM_SUCCESS,
} from "../constants/roomTypes"

export const getRooms =
  (req, currentPage = 1, location = "", guests, category) =>
  async (dispatch) => {
    try {
      //absoluteUrl = for pre render all rooms provide absolute path

      const { origin } = absoluteUrl(req)

      let link = `${origin}/api/rooms/rooms?page=${currentPage}&location=${location}`

      if (guests) {
        link = link.concat(`&guestCapacity=${guests}`)
      }
      if (category) {
        link = link.concat(`&category=${category}`)
      }

      const { data } = await axios.get(link)

      dispatch({
        type: ALL_ROOMS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({ type: ALL_ROOMS_FAIL, payload: error.response.data.message })
    }
  }

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}

export const getRoomDetails = (req, id) => async (dispatch) => {
  const { origin } = absoluteUrl(req)

  let url = req

  if (req) {
    url = `${origin}/api/rooms/${id}`
  } else {
    url = `/api/rooms/${id}`
  }

  const { data } = await axios.get(url)
  try {
    dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data.room })
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message,
    })
  }
}
