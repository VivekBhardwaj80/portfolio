import {Router}from 'express'
import userRouter from '../user.route.js'
import projectRouter from '../project.route.js'
import skillRouter from '../skill.routes.js'
import experienceRouter from '../experience.route.js'
import educationRouter from '../education.route.js'
import feedbackRouter from '../feedback.route.js'
import profileRouter from '../profile.route.js'
import seoRouter from '../seo.route.js'
import isAuth from '../../middlewares/isAuth.js'
import verifyAdmin from '../../controllers/verifyAdmin.controller.js'

const mainRouter = Router()
mainRouter.use('/admin',userRouter)
mainRouter.use('/verify',isAuth,verifyAdmin)
mainRouter.use('/projects',projectRouter)
mainRouter.use('/skills',skillRouter)
mainRouter.use('/experiences',experienceRouter)
mainRouter.use('/educations',educationRouter)
mainRouter.use('/feedback',feedbackRouter)
mainRouter.use('/profile',profileRouter)
mainRouter.use('/seo',seoRouter)

export default mainRouter

