import nc from "next-connect"

import connectDB from "../../../../connectDB"
import onError from "../../../../middlewares/errors"
import { authoriseRoles, isAuthenticated } from "../../../../middlewares/auth"
import {
  deleteUser,
  getUserDetails,
  updateUserDetails,
} from "../../../../controllers/authCont"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated, authoriseRoles("admin")).get(getUserDetails)
handler.use(isAuthenticated, authoriseRoles("admin")).put(updateUserDetails)
handler.use(isAuthenticated, authoriseRoles("admin")).delete(deleteUser)

export default handler
