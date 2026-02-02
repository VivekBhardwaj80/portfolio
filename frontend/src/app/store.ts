import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/educationSlice";
import experienceReducer from '../features/exprience/exprienceSlice'
import skillReducer from '../features/skill/skillSlice'
import profileReducer from '../features/profile/profileSlice'
import projectReducer from '../features/projects/projectSlice'
import dashboardReducer from '../features/dashboard/dashboardSlice'

export const store = configureStore({
    reducer:{
        education:educationReducer,
        experience:experienceReducer,
        skill:skillReducer,
        profile:profileReducer,
        project:projectReducer,
        dashboard:dashboardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
