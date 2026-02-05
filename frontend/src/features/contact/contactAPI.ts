// import api from "../../services/axios";

// const CONTACT_BASE_URL = "/api/v1/contact";

// export const addContact = async (contact: any) => {
//   const data = await api.post(`${CONTACT_BASE_URL}`, contact);
//   return data;
// };

import api from "../../services/axios";

const CONTACT_BASE_URL = "/api/v1/contact";

export const addContact = async (contact: any) => {
  try {
    console.log("📨 Sending contact to API...");
    console.log("📨 API URL:", api.defaults.baseURL + CONTACT_BASE_URL);
    console.log("📨 Contact data:", JSON.stringify(contact, null, 2));
    
    const response = await api.post(CONTACT_BASE_URL, contact);
    
    console.log("✅ API Response received:", response.data);
    return response;
  } catch (error: any) {
    console.error("❌ API Error in addContact:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};