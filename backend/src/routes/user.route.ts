import {Router} from 'express'
import { loginAdmin } from '../controllers/user.controller.js'

const userRouter = Router()
userRouter.post('/login',loginAdmin)


export default userRouter

