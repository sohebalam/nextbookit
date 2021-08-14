import nc from "next-connect"
import { checkRoomAvail } from "../../../controllers/bookingCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/errors"

connectDB()

const router = nc({ onError })

router.get(checkRoomAvail)

export default router
