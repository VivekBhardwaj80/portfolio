import api from "../../services/axios";


const EDUCATION_BASE_URL = '/educations';

export const getAllEducation = async()=>{
    const {data} = await api.get(EDUCATION_BASE_URL)
    return data
}
export const addEducation = async(educationData:any)=>{
    const {data} = await api.post(EDUCATION_BASE_URL,educationData)
    return data
}
export const updateEducation = async(id:string,educationData:any)=>{
    const {data} = await api.put(`${EDUCATION_BASE_URL}/${id}`,educationData)
    return data
}
export const deleteEducation = async(id:string)=>{
    const {data} = await api.delete(`${EDUCATION_BASE_URL}/${id}`)
    return data
}