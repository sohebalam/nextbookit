import nc from "next-connect"

import connectDB from "../../../../connectDB"
import onError from "../../../../middlewares/errors"
import { authoriseRoles, isAuthenticated } from "../../../../middlewares/auth"
import { allAdminUsers } from "../../../../controllers/authCont"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated, authoriseRoles("admin")).get(allAdminUsers)

export default handler
