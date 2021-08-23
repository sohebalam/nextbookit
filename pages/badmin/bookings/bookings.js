import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import {
  bookingDelete,
  clearErrors,
  getAdminBookings,
} from "../../../redux/actions/bookingActions"
import { MDBDataTable } from "mdbreact"
import easyinvoice from "easyinvoice"
import { DELETE_BOOKING_RESET } from "../../../redux/constants/bookingTypes"
import { getSession } from "next-auth/client"
import { CircularProgress } from "@material-ui/core"
const AllBookings = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { bookings, error, loading } = useSelector(
    (state) => state.adminBookings
  )
  const { isDeleted, error: deleteError } = useSelector(
    (state) => state.deleteBooking
  )

  // const { error: deteError, bookings: deleteBookings } = bookings

  useEffect(() => {
    dispatch(getAdminBookings())
    if (error) {
      toast.error(error)
    }
    if (deleteError) {
      toast.error(deleteError)
    }

    if (isDeleted) {
      router.push("/badmin/bookings/bookings")
      dispatch({ type: DELETE_BOOKING_RESET })
    }
    dispatch(clearErrors())
  }, [dispatch, isDeleted, deleteError])

  const setBookings = () => {
    const data = {
      columns: [
        {
          label: "Booking ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Check In",
          field: "checkIn",
          sort: "asc",
        },
        {
          label: "Check Out",
          field: "checkOut",
          sort: "asc",
        },
        {
          label: "Amount Paid",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    }
    bookings &&
      bookings.forEach((booking) => {
        // console.log(booking)
        data.rows.push({
          id: booking._id,
          checkIn: new Date(booking.checkInDate).toLocaleString("en-US"),
          checkOut: new Date(booking.checkOutDate).toLocaleString("en-US"),
          amount: `$${booking.amountPaid}`,
          actions: (
            <>
              {" "}
              <Link href={`/bookings/${booking._id}`}>
                <a className="btn btn-primary">
                  <i className="fa fa-eye"></i>
                </a>
              </Link>
              <button
                className="btn btn-success mx-2"
                onClick={() => downloadInvoice(booking)}
              >
                <i className="fa fa-download"></i>
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteBookingHandler(booking._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </>
          ),
        })
      })
    return data
  }

  const deleteBookingHandler = (id) => {
    dispatch(bookingDelete(id))
  }

  const downloadInvoice = async (booking) => {
    const data = {
      documentTitle: "Booking Invoice", //Defaults to INVOICE
      //"locale": "de-DE", //Defaults to en-US, used for number formatting (see docs)
      currency: "GBP", //See documentation 'Locales and Currency' for more info
      taxNotation: "vat", //or gst
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "https://res.cloudinary.com/bookit/image/upload/v1617904918/bookit/bookit_logo_cbgjzv.png", //or base64
      background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
      sender: {
        company: "Book IT",
        address: "13th Steet. 47 W 13th St",
        zip: "10001",
        city: "New York",
        country: "United States",
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
      },
      client: {
        company: `${booking.user.name}`,
        address: `${booking.user.email}`,
        zip: "",
        city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
          "en-US"
        )}`,
        country: `Check In: ${new Date(booking.checkOutDate).toLocaleString(
          "en-US"
        )}`,
      },
      invoiceNumber: `${booking._id}`,
      invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
      products: [
        {
          quantity: `${booking.daysOfStay}`,
          description: `${booking.room.name}`,
          tax: 0,
          price: `${booking.room.pricePerNight}`,
        },
      ],
      bottomNotice:
        "This is auto generated Invoice of your booking on Book IT.",
    }
    const result = await easyinvoice.createInvoice(data)
    easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf)
  }

  return (
    <div className="container container-fluid">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <h1 className="my-5">{`${bookings && bookings.length} Bookings`} </h1>
          <MDBDataTable
            data={setBookings()}
            className="px-3"
            bordered
            striped
          />
        </>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
export default AllBookings
