import api from "../../services/axios";

const FEEDBACK_BASE_URL = "/api/v1/feedback";

export const addFeedback = async (feedbackData: any) => {
  const data = await api.post(FEEDBACK_BASE_URL, feedbackData);
  return data;
};

export const getSingleFeedback = async (id: string) => {
  const data = await api.get(`${FEEDBACK_BASE_URL}/${id}`);
  return data;
};

export const getAllFeedback = async () => {
  const data = await api.get(FEEDBACK_BASE_URL);
  return data;
};

export const updateFeedback = async(id:string,feedbackData: any)=>{
    const data = await api.patch(`${FEEDBACK_BASE_URL}/${id}`,feedbackData)
    return data
}

export const deleteOneFeedback = async(id:string)=>{
    const data = await api.delete(`${FEEDBACK_BASE_URL}/${id}`)
    return data
}

export const deleteAllFeedback = async()=>{
    const data = await api.post(FEEDBACK_BASE_URL)
    return data
}
