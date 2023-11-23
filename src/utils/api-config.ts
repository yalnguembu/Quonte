import axios from "axios";
import { OpenAPI } from "@/services/core/OpenAPI";

let refresh = false;
axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response?.status === 401 && !refresh) {
      refresh = true;

      const { status, data } = await axios.post(
        "refresh",
        {},
        {
          withCredentials: true,
        }
      );

      if (status === 200) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        return axios(error.config);
      }
    }
    refresh = false;
    throw error;
  }
);

export const setRequestHeaderToken = (token: string): void => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const prepareApis = (): void => {
  OpenAPI.BASE = import.meta.env.VITE_BASE_URL;
  OpenAPI.TOKEN = getAccessToken;
};

export const getAccessToken = (): string =>
  localStorage.getItem("apiAccessToken") ?? "";

export const getRefreshToken = (): string =>
  localStorage.getItem("apiRefreshToken") ?? "";

export const saveAccessToken = (accessToken: string): void =>
  localStorage.setItem("apiAccessToken", accessToken);

export const saveRefreshToken = (accessToken: string): void =>
  localStorage.setItem("apiAccessToken", accessToken);
