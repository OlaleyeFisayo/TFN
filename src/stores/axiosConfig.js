import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.API,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error({ error })
    // if (error.response && error.response.status === 401) {
    // }
    return Promise.reject(error ?? 'Unable to reach server, try again later')
  },
)

export default axiosInstance
