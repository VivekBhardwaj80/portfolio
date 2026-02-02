import api from "../../services/axios";

const DASHBOARD_BACKEND_URL = '/dashboard'

export const getDashboard = async()=>{
    const data = api.get(DASHBOARD_BACKEND_URL)
    return data
}



