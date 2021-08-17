import nc from "next-connect"
import { stripeCheckout } from "../../../controllers/paymentCont"
import connectDB from "../../../connectDB"
import onError from "../../../middlewares/errors"
import { isAuthenticated } from "../../../middlewares/auth"

connectDB()

const handler = nc({ onError })

handler.use(isAuthenticated).get(stripeCheckout)

export default handler
