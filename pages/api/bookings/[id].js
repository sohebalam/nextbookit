import nc from "next-connect"
import { getBookingDetails } from "../../../controllers/bookingCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/errors"
import { isAuthenticated } from "../../../middlewares/auth"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated).get(getBookingDetails)

export default handler
