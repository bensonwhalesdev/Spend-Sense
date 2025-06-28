import axios from "axios";

const baseURL = import.meta.env.VITE_PUBIC_BASE_URL;

export const apiClient = axios.create({
    baseURL,
    withCredentials: true,
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});