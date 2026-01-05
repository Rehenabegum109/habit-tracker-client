
import axios from "axios";
import { useNavigate } from "react-router";

import { auth } from "../../Firebase/firebase.config";
import { UseAuth } from "../Contexts/AuthContexts";

const useAxiosSecure = () => {
  const { logout } = UseAuth(); 
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: "https://habit-tracker-server-ashy.vercel.app",
  });

  axiosInstance.interceptors.request.use(async (config) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        const token = await currentUser.getIdToken(true);
        if (token) config.headers.Authorization = `Bearer ${token}`;
      } catch (err) {
        console.error("Failed to get token:", err);
      }
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const status = err.response?.status;
      if (status === 401) {
        await logout();
        navigate("/login");
      }
      if (status === 403) {
        console.warn("Forbidden access");
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
