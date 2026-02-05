import api from "../../services/axios";

const PROJECT_BASE_URL = '/api/v1/projects'

export const getProject = async()=>{
    const data = await api.get(PROJECT_BASE_URL)
    return data
}

export const getSingleProject = async(id:string)=>{
    const data = await api.get(`${PROJECT_BASE_URL}/${id}`)
    return data
}

export const addProject = async(profileData:any)=>{
    const data = await api.post(`${PROJECT_BASE_URL}`,profileData)
    return data
}

export const updateProject = async(id:string,profileData:any)=>{
    const data = await api.put(`${PROJECT_BASE_URL}/${id}`,profileData)
    return data
}

export const deleteProject = async()=>{
    const data = await api.delete(`${PROJECT_BASE_URL}`)
    return data
}