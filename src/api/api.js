import axios from 'axios'

export const baseURL = 'https://api.laybuy.app'

const instance = axios.create({
  baseURL,
})

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default instance
