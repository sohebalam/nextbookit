import nc from "next-connect"
import { allRooms, newRoom } from "../../../controllers/roomCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/error"
import { authoriseRoles, isAuthenticated } from "../../../middlewares/auth"

connectDB()

const router = nc({ onError })

router.use(isAuthenticated, authoriseRoles("admin")).get(allRooms)
router.use(isAuthenticated, authoriseRoles("admin")).post(newRoom)

export default router
