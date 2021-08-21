import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
// import Loader from "../layout/Loader"

import { toast } from "react-toastify"
// import ButtonLoader from "../layout/ButtonLoader"

// import { reviewNew } from "../../redux/actions/reviewActions"

import { useDispatch, useSelector } from "react-redux"

import { NEW_REVIEW_RESET } from "../../redux/constants/roomTypes"

import {
  reviewNew,
  clearErrors,
  checkReviewAvailability,
} from "../../redux/actions/roomActions"
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import { TextareaAutosize } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import Dialog from "@material-ui/core/Dialog"
function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "flex",
    width: 470,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 2, 2),
  },
}))

const NewReview = () => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const dispatch = useDispatch()
  const router = useRouter()

  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const newReview = useSelector((state) => state.newReview)
  const { loading, error, success } = newReview

  const checkReview = useSelector((state) => state.checkReview)
  const { reviewAvailable } = checkReview

  // console.log(reviewAvailable)

  const { id } = router.query
  // console.log(id)

  useEffect(() => {
    if (id !== undefined) {
      dispatch(checkReviewAvailability(id))
    }

    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }

    if (success) {
      toast.success("Review is posted")
      dispatch({ type: NEW_REVIEW_RESET })
    }
  }, [dispatch, success, error, id])

  const submitHandler = () => {
    const reviewData = {
      rating,
      comment,
      roomId: id,
    }

    dispatch(reviewNew(reviewData))
  }

  const classes = useStyles()
  return (
    <>
      {reviewAvailable && (
        <Box style={{ marginRight: "3rem" }}>
          <Button
            type="button"
            onClick={handleOpen}
            variant="contained"
            style={{ marginRight: "2rem" }}
            fullWidth={true}
            color="primary"
          >
            Submit Review
          </Button>
        </Box>
      )}
      <Dialog
        // style={{ marginTop: "20rem" }}
        style={modalStyle}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Grid container>
            <Grid item xs={10}>
              <Typography>Submit Review</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Grid>
            <DialogContent>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue)
                }}
              />
            </DialogContent>
            <DialogActions style={{ marginRight: "3rem" }}>
              <TextareaAutosize
                minRows={4}
                name="review"
                id="review"
                className="form-control mt-3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></TextareaAutosize>
            </DialogActions>
          </Grid>
          <Button
            variant="contained"
            onClick={submitHandler}
            fullWidth={true}
            color="secondary"
          >
            Submit
          </Button>
        </div>
      </Dialog>
    </>
  )
}

export default NewReview
