import axios from "axios";

const instance = axios.create({
  baseURL: "https://laybuy.app/api"
});

instance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
