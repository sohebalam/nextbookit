import nc from "next-connect"
import { allRooms, newRoom } from "../../../controllers/roomCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/error"

connectDB()

const router = nc({ onError })

router.get(allRooms)
router.post(newRoom)

export default router
