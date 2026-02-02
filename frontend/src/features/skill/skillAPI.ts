import api from "../../services/axios";

const SKILL_BASE_URL = 'skills'

export const addSkill = async(skill:any)=>{
    const data = await api.post(SKILL_BASE_URL,skill)
    return data
} 

export const getSkill = async()=>{
    const data = await api.get(SKILL_BASE_URL)
    return data
}

export const updateSkill = async(id:string,skill:any)=>{
    const data = await api.put(`${SKILL_BASE_URL}/${id}`,skill)
    return data
}

export const deleteOneSkill = async(id:string)=>{
    const data = await api.delete(`${SKILL_BASE_URL}/${id}`)
    return data
}

export const deleteAllSkill = async()=>{
    const data = await api.delete(SKILL_BASE_URL)
    return data
}

