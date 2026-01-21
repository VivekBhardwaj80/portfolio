import {Router}from 'express'
import userRouter from '../user.route.js'
import projectRouter from '../project.route.js'
import skillRouter from '../skill.routes.js'
import experienceRouter from '../experience.route.js'
import educationRouter from '../education.route.js'
import feedbackRouter from '../feedback.route.js'
import profileRouter from '../profile.route.js'
import seoRouter from '../seo.route.js'

const mainRouter = Router()
mainRouter.use('/admin',userRouter)
mainRouter.use('/project',projectRouter)
mainRouter.use('/skill',skillRouter)
mainRouter.use('/experience',experienceRouter)
mainRouter.use('/education',educationRouter)
mainRouter.use('/feedback',feedbackRouter)
mainRouter.use('/profile',profileRouter)
mainRouter.use('/seo',seoRouter)

export default mainRouter

