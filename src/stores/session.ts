import { defineStore } from "pinia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosError } from "axios";
import { saveAccessToken, setRequestHeaderToken } from "@/utils/api-config";
import { reactive, ref } from "vue";
import type { AuthResponseDTO } from "@/services/bespace";
import { AuthService } from "@/services/bespace";

type Request = {
  status: number;
  message: string;
};

export const useSessionStore = defineStore("session", () => {
  const session = ref<Pick<
    AuthResponseDTO,
    "id" | "email" | "access_token"
  > | null>(null);
  const request = reactive<Request>({
    status: 200,
    message: "Ok",
  });

  const handelError = (error: any) => {
    const status: number = error.response?.status;
    switch (status) {
      case 404:
        return {
          success: false,
          message: "Please check your inernect connection",
        };
      case 400:
        return {
          success: false,
          message: "Sorry your email and your password are wrong",
        };
      case 403:
        return {
          success: false,
          message: "Sorry your email or your password is wrong",
        };
      default:
        return {
          success: false,
          message: "Sorry and error has occured retry later!",
        };
    }
  };

  const handelRequest = (status: number, message: string) => {
    request.status = status;
    request.message = message;
  };

  const saveApiToken = (response: AuthResponseDTO): void => {
    localStorage.setItem("apiAccessToken", response.access_token);
    localStorage.setItem("apiRefreshToken", response.refresh_token);
  };
  const getAccessToken = () => localStorage.getItem("apiAccessToken") ?? "";
  const verifyAccessToken = async (accessToken: string) => {
    if (accessToken)
      return await AuthService.verifyToken({
        requestBody: { access_token: accessToken },
      });
    return;
  };

  const isSigned = () => {
    return session.value !== null;
  };

  const signIn = async (user: { email: string; password: string }) => {
    try {
      const data: AuthResponseDTO = await AuthService.signin({
        requestBody: user,
      });
      session.value = data;
      saveApiToken(data);
      setRequestHeaderToken(data.access_token);
      return { success: true, message: "connected successfully" };
    } catch (error: AxiosError | any) {
      handelError(error);
    }
  };
  const signUp = async (user: { email: string; password: string }) => {
    try {
      const data: AuthResponseDTO = await AuthService.signup({
        requestBody: user,
      });
      session.value = data;
      setRequestHeaderToken(data.access_token);
    } catch (error: AxiosError | any) {
      handelError(error);
    }
    return request;
  };
  const refreshToken = async (token: string) => {
    try {
      const response = await AuthService.refreshToken({
        requestBody: { refresh_token: token },
      });
      session.value = response;
      saveAccessToken(response.access_token ?? "");
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = () => {
    session.value = null;
    localStorage.clear();
  };
  return {
    session,
    isSigned,
    signIn,
    signUp,
    signOut,
    getAccessToken,
    verifyAccessToken,
    refreshToken,
  };
});
