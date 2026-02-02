import api from "../../services/axios";

const EXPERIENCE_BASE_URL = '/experiences'

export const getAllExperience = async()=>{
    const {data} = await api.get(EXPERIENCE_BASE_URL)
    return data
}

export const addExperience = async(experience:any)=>{
    const {data} = await api.post(EXPERIENCE_BASE_URL,experience)
    return data
}

export const getSingleExperience = async(id:string)=>{
    const {data} = await api.get(`${EXPERIENCE_BASE_URL}/${id}`)
    return data
}

export const deleteOneExperience = async(id:string)=>{
    const {data}= await api.delete(`${EXPERIENCE_BASE_URL}/${id}`)
    return data
}

export const deleteAllExperience = async()=>{
    const {data} = await api.delete(EXPERIENCE_BASE_URL)
    return data
}

export const updateExperience = async(id:string,experience:any)=>{
    const {data}= await api.put(`${EXPERIENCE_BASE_URL}/${id}`,experience)
    return data
}



