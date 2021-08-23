import nc from "next-connect"
import connectDB from "../../../connectDB"

import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomCont"

import onError from "../../../middlewares/error"
import { isAuthenticated, authoriseRoles } from "../../../middlewares/auth"

const handler = nc({ onError })

connectDB()

handler.use(isAuthenticated, authoriseRoles("admin")).get(getSingleRoom)

handler.use(isAuthenticated, authoriseRoles("admin")).put(updateRoom)

handler.use(isAuthenticated, authoriseRoles("admin")).delete(deleteRoom)

export default handler
