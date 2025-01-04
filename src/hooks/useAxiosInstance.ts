import axios from "axios";
import { getCookie } from "cookies-next";
import { deleteCookie } from "cookies-next";
import { toast } from "sonner";

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4023"
    : "https://api.cryptobots.io";

const useAxiosInstance = () => {
  const token = getCookie("auth_token");

  const authAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Add a response interceptor to check for expired token
  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        // handle expired token
        status === 401
          ? toast.error("Unauthorized")
          : toast.error("User has to be logged in!!");
        deleteCookie("auth_token");
        window.location.assign("/dashboard/home");
      }
      return Promise.reject(error);
    }
  );

  return authAxios;
};

export default useAxiosInstance;
