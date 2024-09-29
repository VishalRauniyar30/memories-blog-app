import { Router } from "express"
import { signin, signup } from "../controllers/users.controllers.js"

const userRoutes = Router()


userRoutes.post('/signin', signin)
userRoutes.post('/signup', signup)

export default userRoutes