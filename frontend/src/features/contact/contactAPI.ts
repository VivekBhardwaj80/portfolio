import api from "../../services/axios";

const CONTACT_BASE_URL = "/api/v1/contact";

export const addContact = async (contact: any) => {
  const data = await api.post(`${CONTACT_BASE_URL}`, contact, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
