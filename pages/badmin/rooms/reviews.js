import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { getSession } from "next-auth/client"
import { MDBDataTable } from "mdbreact"
import { Box, Button, TextField } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

import {
  getRoomReviews,
  deleteReview,
  clearErrors,
} from "../../../redux/actions/roomActions"
import { DELETE_REVIEW_RESET } from "../../../redux/constants/roomTypes"

const RoomReviews = () => {
  const [roomId, setRoomId] = useState("")

  const dispatch = useDispatch()
  const router = useRouter()

  const { loading, error, reviews } = useSelector((state) => state.roomReview)
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteReviews
  )

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }

    if (deleteError) {
      toast.error(deleteError)
      dispatch(clearErrors())
    }

    if (isDeleted) {
      toast.success("Review is deleted.")
      dispatch({ type: DELETE_REVIEW_RESET })
    }
  }, [dispatch, error, roomId, deleteError, isDeleted])

  const setReviews = () => {
    const data = {
      columns: [
        {
          label: "Review ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Rating",
          field: "rating",
          sort: "asc",
        },
        {
          label: "Comment",
          field: "comment",
          sort: "asc",
        },
        {
          label: "User",
          field: "user",
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

    reviews &&
      reviews.forEach((review) => {
        data.rows.push({
          id: review._id,
          rating: review.rating,
          comment: review.comment,
          user: review.name,
          actions: (
            <button
              className="btn btn-danger mx-2"
              onClick={() => deleteReviewHandler(review._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          ),
        })
      })

    return data
  }

  const deleteReviewHandler = (id) => {
    // console.log(id, roomId)
    dispatch(deleteReview(id, roomId))
  }

  const submitHandler = async (e) => {
    e.preventDefault() /
      // console.log(userData)
      // return
      dispatch(getRoomReviews(roomId))
  }

  return (
    <div className="container container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-5">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <hr />
              {/* <input
                type="email"
                id="roomId_field"
                className="form-control"
                // value={roomId}
                onChange={null ? "" : (e) => setRoomId(e.target.value)}
              /> */}
              <label htmlFor="roomId_field">Enter Room ID</label>
              <TextField
                style={{ marginTop: "2rem" }}
                variant="outlined"
                required
                fullWidth
                id="text"
                label="Room Id"
                name="roomIsd"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "0.5rem" }}
            >
              Find Reviews
            </Button>
          </form>
        </div>
      </div>

      <Box style={{ marginTop: "1rem" }}>
        {reviews && reviews.length > 0 ? (
          <MDBDataTable
            data={setReviews()}
            className="px-3"
            bordered
            striped
            hover
          />
        ) : (
          <div className="alert alert-danger mt-5 text-center">No Reviews</div>
        )}
      </Box>
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
export default RoomReviews
