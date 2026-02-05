import api from "../../services/axios";

const DASHBOARD_BACKEND_URL = '/api/v1/dashboard'

export const getDashboard = async()=>{
    const data = api.get(DASHBOARD_BACKEND_URL)
    return data
}



