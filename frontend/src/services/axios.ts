// import axios from 'axios'

// const api = axios.create({
//     baseURL:"https://port-backend-fab0.onrender.com",
//     withCredentials:true,
// });

// export default api

import axios from 'axios'

// Make sure this is the correct backend URL - no typos!
const api = axios.create({
    baseURL: "https://port-backend-fab0.onrender.com", // Correct backend URL
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add debugging
console.log("✅ Axios configured with baseURL:", api.defaults.baseURL);

// Request interceptor for debugging
api.interceptors.request.use((config) => {
    console.log("📤 Making request to:", config.baseURL + config.url);
    console.log("📤 Request method:", config.method);
    console.log("📤 Request data:", config.data);
    return config;
}, (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
});

// Response interceptor for debugging
api.interceptors.response.use((response) => {
    console.log("✅ Response received:", {
        status: response.status,
        statusText: response.statusText,
        data: response.data
    });
    return response;
}, (error) => {
    console.error("❌ Response error:", {
        message: error.message,
        code: error.code,
        config: {
            url: error.config?.baseURL + error.config?.url,
            method: error.config?.method,
            data: error.config?.data
        },
        response: error.response ? {
            status: error.response.status,
            data: error.response.data
        } : undefined
    });
    return Promise.reject(error);
});

export default api;