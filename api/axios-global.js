import axios from "axios";
export const baseUrl = "https://lalasia-api.vercel.app";

const axiosApi = axios.create({
  baseURL: baseUrl,
});

// Add a response interceptor
axiosApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data.message);
    } else {
      return Promise.reject(error.message);
    }
  }
);

export default axiosApi;
