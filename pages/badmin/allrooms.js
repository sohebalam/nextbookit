import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { getSession } from "next-auth/client"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

import { MDBDataTable } from "mdbreact"

import {
  adminRooms,
  clearErrors,
  roomDelete,
} from "../../redux/actions/roomActions"
import { DELETE_ROOM_RESET } from "../../redux/constants/roomTypes"
import { CircularProgress } from "@material-ui/core"

const AllRoom = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const allAdminRooms = useSelector((state) => state.allAdminRooms)
  const { loading, error, rooms } = allAdminRooms

  const deleteRoom = useSelector((state) => state.deleteRoom)
  const { error: deleteError, isDeleted } = deleteRoom

  useEffect(() => {
    dispatch(adminRooms())
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    if (deleteError) {
      toast.error(deleteError)
      dispatch(clearErrors())
    }
    if (isDeleted) {
      router.push("/badmin/allrooms")
      dispatch({ type: DELETE_ROOM_RESET })
    }
  }, [dispatch, isDeleted, deleteError, deleteRoom])

  const setRooms = () => {
    const data = {
      columns: [
        {
          label: "Room ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Price /Night",
          field: "price",
          sort: "asc",
        },
        {
          label: "Category",
          field: "category",
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
    rooms &&
      rooms.forEach((room) => {
        // console.log(room)
        data.rows.push({
          id: room._id,
          name: room.name,
          price: `$${room.pricePerNight}`,
          category: room.category,
          actions: (
            <>
              {" "}
              <Link href={`/badmin/rooms/${room._id}`}>
                <a className="btn btn-primary">
                  <i className="fa fa-pencil"></i>
                </a>
              </Link>
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteRoomHandler(room._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </>
          ),
        })
      })
    return data
  }

  const deleteRoomHandler = (id) => {
    dispatch(roomDelete(id))
  }

  return (
    <div className="container container-fluid">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <h1 className="my-5">
            {`${rooms && rooms.length} Rooms`}
            <Link href="/badmin/newroom">
              <a>Create Room</a>
            </Link>
          </h1>
          <MDBDataTable data={setRooms()} className="px-3" bordered striped />
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

export default AllRoom
