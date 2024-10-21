import axios from 'axios'

const baseURL = 'http://localhost:8080/api'

// this is the axios instance we use to call the backend (ok ? okkk)
const api = axios.create({
    baseURL: baseURL,
})
// this for refreshing the token dont use this for regular requests (ok ? okkkkk)
export const RefreshAPi = axios.create({
    baseURL: baseURL,
    withCredentials: true,
})

export default api
