import nc from "next-connect"
import connectDB from "../../../connectDB"

import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomCont"

import onError from "../../../middlewares/error"
// import { isAuthenticatedUser } from "../../../middlewares/auth"

const handler = nc({ onError })

connectDB()

handler.get(getSingleRoom)

handler.put(updateRoom)

handler.delete(deleteRoom)

export default handler
