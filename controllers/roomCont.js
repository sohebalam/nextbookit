import Room from "../models/roomModel"

// import Booking from "../models/bookingModel"

import cloudinary from "cloudinary"

import ErrorHandler from "../utils/errorHandler"
import catchAsyncErrors from "../middlewares/catchAsyncErrors"
import APIFeatures from "../utils/apiFeatures"

// Create all rooms   =>   /api/rooms
export const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4

  const roomsCount = await Room.countDocuments()

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter()

  let rooms = await apiFeatures.query
  let filteredRoomsCount = rooms.length

  apiFeatures.pagination(resPerPage)
  rooms = await apiFeatures.query

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  })
})

// Create new room   =>   /api/rooms
export const newRoom = catchAsyncErrors(async (req, res) => {
  const images = req.body.images

  let imagesLinks = []

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "bookit/rooms",
    })

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    })
  }

  req.body.images = imagesLinks
  req.body.user = req.user._id

  const room = await Room.create(req.body)

  res.status(200).json({
    success: true,
    room,
  })
})

// Get room details   =>   /api/rooms/:id
export const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id)

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404))
  }

  res.status(200).json({
    success: true,
    room,
  })
})

// Update room details   =>   /api/rooms/:id
export const updateRoom = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body)
  let room = await Room.findById(req.query.id)

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404))
  }

  let newRoom = await Room.findByIdAndUpdate(req.query.id, req.body, {
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    newRoom,
  })
})

// Delete room   =>   /api/rooms/:id
export const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id)

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404))
  }

  await room.remove()

  res.status(200).json({
    success: true,
    message: "Room is deleted.",
  })
})

// Create a new review   =>   /api/reviews
export const createRoomReview = catchAsyncErrors(async (req, res) => {
  const { rating, comment, roomId } = req.body

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  }

  const room = await Room.findById(roomId)

  const isReviewed = room.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  )

  if (isReviewed) {
    room.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment
        review.rating = rating
      }
    })
  } else {
    room.reviews.push(review)
    room.numOfReviews = room.reviews.length
  }

  room.ratings =
    room.reviews.reduce((acc, item) => item.rating + acc, 0) /
    room.reviews.length

  await room.save({ validateBeforeSave: false })

  res.status(200).json({
    success: true,
  })
})

export const checkReviewAuth = catchAsyncErrors(async (req, res) => {
  const { roomId } = req.query

  const bookings = await Booking.find({ user: req.user._id, room: roomId })

  let isReviewAvailable = false
  if (bookings.length > 0) isReviewAvailable = true

  res.status(200).json({ success: true, isReviewAvailable })
})

export const allAdminRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find()
  res.status(200).json({ success: true, rooms })
})

export const getRoomReviews = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id)
  res.status(200).json({ success: true, reviews: room.reviews })
})

export const deleteReview = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.roomId)

  const reviews = room.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  )

  const numOfReviews = reviews.length

  const ratings =
    room.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

  await Room.findByIdAndUpdate(
    req.query.roomId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  )

  res.status(200).json({
    success: true,
  })
})
