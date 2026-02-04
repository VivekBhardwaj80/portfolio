import api from "../../services/axios";

const CONTACT_BASE_URL = "/contact";

export const addContact = async (contact: any) => {
  const data = await api.post(`${CONTACT_BASE_URL}`, contact);
  return data;
};
