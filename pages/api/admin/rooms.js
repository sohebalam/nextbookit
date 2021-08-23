import nc from "next-connect"

import connectDB from "../../../connectDB"
import onError from "../../../middlewares/errors"
import { isAuthenticated, authoriseRoles } from "../../../middlewares/auth"
import { allAdminRooms } from "../../../controllers/roomCont"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated, authoriseRoles("admin")).get(allAdminRooms)

export default handler
