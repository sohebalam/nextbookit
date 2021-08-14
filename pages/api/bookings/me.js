import nc from "next-connect"
import { myBookings } from "../../../controllers/bookingCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/errors"
import { isAuthenticated } from "../../../middlewares/auth"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated).get(myBookings)

export default handler
