import Booking from "../models/bookingModel"
import Room from "../models/roomModel"
import ErrorHandler from "../utils/errorHandler"
import catchAsyncErrors from "../middlewares/catchAsyncErrors"

import Moment from "moment"

import { extendMoment } from "moment-range"

const moment = extendMoment(Moment)

export const newBooking = catchAsyncErrors(async (req, res) => {
  const {
    room,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = req.body

  // console.log(
  //   room,
  //   checkInDate,
  //   checkOutDate,
  //   daysOfStay,
  //   amountPaid,
  //   paymentInfo
  // )

  const booking = await Booking.create({
    room,
    user: req.user._id,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
    paidAt: Date.now(),
  })

  res.status(200).json({
    success: true,
    booking,
  })
})

export const checkRoomAvail = catchAsyncErrors(async (req, res) => {
  let { roomId, checkInDate, checkOutDate } = req.query

  checkInDate = new Date(checkInDate)
  checkOutDate = new Date(checkOutDate)

  const bookings = await Booking.find({
    room: roomId,
    $and: [
      {
        checkInDate: {
          $lte: checkOutDate,
        },
      },
      {
        checkOutDate: {
          $gte: checkInDate,
        },
      },
    ],
  })

  let isAvailable

  if (bookings && bookings.length === 0) {
    isAvailable = true
  } else {
    isAvailable = false
  }

  res.status(200).json({
    success: true,
    isAvailable,
  })
})

export const checkBookedDates = catchAsyncErrors(async (req, res) => {
  const { roomId } = req.query

  const bookings = await Booking.find({ room: roomId })

  let bookedDates = []

  const timeDifference = moment().utcOffset() / 60
  // console.log(timeDifference)

  bookings.forEach((booking) => {
    const checkInDate = moment(booking.checkInDate).add(timeDifference, "hours")
    const checkOutDate = moment(booking.checkOutDate).add(
      timeDifference,
      "hours"
    )

    const range = moment.range(moment(checkInDate), moment(checkOutDate))
    const dates = Array.from(range.by("day"))
    bookedDates = bookedDates.concat(dates)
  })

  res.status(200).json({ success: true, bookedDates })
})

export const myBookings = catchAsyncErrors(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate({
      path: "room",
      select: "name pricePerNight images",
    })
    .populate({
      path: "user",
      select: "name email",
    })

  res.status(200).json({ success: true, bookings })
})

export const getBookingDetails = catchAsyncErrors(async (req, res) => {
  const bookingdetail = await Booking.findById(req.query.id)
    .populate({
      path: "rooms",
      select: "name pricePerNight images",
    })
    .populate({
      path: "user",
      select: "name email",
    })

  const room = await Room.findById(bookingdetail.room)

  let booking = Object.assign(bookingdetail, { room })

  res.status(200).json({
    success: true,
    booking,
  })
})

export const allAdminBookings = catchAsyncErrors(async (req, res) => {
  console.log("Stripe")
  const bookings = await Booking.find()
    .populate({
      path: "room",
      select: "name pricePerNight images",
    })
    .populate({
      path: "user",
      select: "name email",
    })

  res.status(200).json({ success: true, bookings })
})

export const deleteBookings = catchAsyncErrors(async (req, res) => {
  const booking = await Booking.findById(req.query.id)
  if (!booking) {
    return next(new ErrorHandler("Booking bit found with this ID", 400))
  }

  await booking.remove()

  res.status(200).json({ success: true, booking })
})
