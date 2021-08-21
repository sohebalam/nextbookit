import { Box, Typography, Card } from "@material-ui/core"
import React from "react"
import Rating from "@material-ui/lab/Rating"
const ListReviews = ({ reviews }) => {
  return (
    <>
      <div className="reviews w-75">
        <h3>Reviews:</h3>

        <hr />

        {reviews &&
          reviews.map((review) => (
            <div key={review._id}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={review.rating} readOnly />
              </Box>
              <Box ml={3}>
                <Typography>by {review.name}</Typography>
                <Typography>{review.comment}</Typography>
              </Box>
              <hr />
            </div>
          ))}
      </div>
    </>
  )
}

export default ListReviews
