import nc from "next-connect"
import { allAdminBookings } from "../../../../controllers/bookingCont"
import connectDB from "../../../../connectDB"
import onError from "../../../../middlewares/errors"
import { isAuthenticated, authoriseRoles } from "../../../../middlewares/auth"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated, authoriseRoles("admin")).get(allAdminBookings)

export default handler
