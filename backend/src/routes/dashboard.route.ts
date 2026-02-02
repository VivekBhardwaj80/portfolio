import { Router } from 'express'
import adminDash from '../controllers/adminDash.controller.js'

const dahRouter = Router()

dahRouter.get('/',adminDash)

export default dahRouter