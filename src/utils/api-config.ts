import axios from "axios";

// axios.defaults.baseURL = import.meta.env.BASE_URL;

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

import { OpenAPI } from "@/services/bespace";

export const prepareApis = () => {
  OpenAPI.BASE = import.meta.env.VITE_BASE_URL;
  OpenAPI.TOKEN = getAccessToken;
};

const getAccessToken = async (): Promise<string> => {
  const accessToken = localStorage.getItem("apiAccessToken");
  return accessToken == null ? "" : accessToken;
};
