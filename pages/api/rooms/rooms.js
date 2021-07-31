import nc from "next-connect"
import { allRooms } from "../../../contollers/roomCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/error"

connectDB()

const router = nc({ onError })

router.get(allRooms)
// router.post(newRoom)

export default router
