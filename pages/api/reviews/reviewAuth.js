import nc from "next-connect"
import connectDB from "../../../connectDB"

import onError from "../../../middlewares/errors"
import { isAuthenticated } from "../../../middlewares/auth"
import { checkReviewAuth } from "../../../controllers/reviewCont"

const handler = nc({ onError })

connectDB()

handler.use(isAuthenticated).get(checkReviewAuth)

export default handler
