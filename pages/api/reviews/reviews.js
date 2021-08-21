import nc from "next-connect"
import connectDB from "../../../connectDB"

import onError from "../../../middlewares/errors"
import { isAuthenticated } from "../../../middlewares/auth"
import {
  createRoomReview,
  deleteReview,
  getRoomReviews,
} from "../../../controllers/reviewCont"

const handler = nc({ onError })

connectDB()

handler.use(isAuthenticated).put(createRoomReview)
handler.use(isAuthenticated).get(getRoomReviews)
handler.use(isAuthenticated).delete(deleteReview)

export default handler
