import { defineStore } from "pinia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import setRequestHeaderToken, { type AxiosError } from "axios";
import { reactive, ref } from "vue";
import type { AuthResponseDTO } from "@/services/bespace";
import { AuthService } from "@/services/bespace";

type Request = {
  status: number;
  message: string;
};

export const useSessionStore = defineStore("session", () => {
  const session = ref<AuthResponseDTO | null>(null);
  const request = reactive<Request>({
    status: 200,
    message: "Ok",
  });

  const handelRequest = (status: number, message: string) => {
    request.status = status;
    request.message = message;
  };
  const saveApiToken = (response: AuthResponseDTO): void => {
    localStorage.setItem("apiAccessToken", response.access_token);
    localStorage.setItem("apiRefreshToken", response.refresh_token);
  };
  const getAccessToken = () => localStorage.getItem("apiAccessToken") ?? "";
  const verifyToken = async () => {
    const accessToken = getAccessToken();
    if (accessToken)
      return await AuthService.verifyToken({
        requestBody: { access_token: accessToken },
      });
    return;
  };
  const isSigned = () => {
    if (session.value == null) {
      return verifyToken();
    }
    return;
  };
  const signIn = async (user: { email: string; password: string }) => {
    try {
      const data: AuthResponseDTO = await AuthService.signin({
        requestBody: user,
      });
      session.value = data;
      saveApiToken(data);
      
      setRequestHeaderToken(data.access_token);
    } catch (error: AxiosError | any) {
      const status: number = error.response?.status;
      switch (status) {
        case 404:
          handelRequest(status, "Please check your inernect connection");
          break;
        case 400:
          handelRequest(status, "Sorry your email and your password are wrong");
          break;
        case 403:
          handelRequest(status, "Sorry your email or your password is wrong");
          break;
        default:
          handelRequest(status, "Sorry and error has occured retry later!");
          break;
      }
    }
    return request;
  };
  const signUp = async (user: { email: string; password: string }) => {
    try {
      const data: AuthResponseDTO = await AuthService.signup({
        requestBody: user,
      });
      session.value = data;
      setRequestHeaderToken(data.access_token);
    } catch (error: AxiosError | any) {
      const status: number = error.response?.status;
      switch (status) {
        case 404:
          handelRequest(status, "Please check your inernect connection");
          break;
        case 400:
          handelRequest(status, "Sorry your email and your password are wrong");
          break;
        case 403:
          handelRequest(status, "Sorry your email or your password is wrong");
          break;
        default:
          handelRequest(status, "Sorry and error has occured retry later!");
          break;
      }
    }
    return request;
  };
  const signOut = () => {
    ///empty storage,...
    session.value = null;
    localStorage.clear();
  };
  return { session, isSigned, signIn, signUp, signOut };
});
