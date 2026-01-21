import {Router} from 'express'
import { loginAdmin, logoutAdmin } from '../controllers/user.controller.js'
import isAuth from '../middlewares/isAuth.js'

const userRouter = Router()
userRouter.post('/login',loginAdmin)
userRouter.post('/logout', isAuth ,logoutAdmin)


export default userRouter

