import axios from 'axios'

const api = axios.create({
    baseURL:https://port-backend-fab0.onrender.com,
    withCredentials:true,
});

export default api
