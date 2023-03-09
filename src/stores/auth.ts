import { defineStore } from "pinia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import setRequestHeaderToken, { type AxiosError } from "axios";
import { reactive, ref } from "vue";
import type { AuthResponseDTO } from "@/services/bespace";
import { AuthService } from "@/services/bespace";

export const useSessionStore = defineStore("session", () => {
  const session = ref<AuthResponseDTO | null>(null);

  const isSigned = () => {
    return session.value !== null;
  };

  const signIn = async (user: { email: string; password: string }) => {
    type Request = {
      status: number;
      message: string;
    };

    const request = reactive<Request>({
      status: 200,
      message: "Ok",
    });

    const handelRequest = (status: number, message: string) => {
      request.status = status;
      request.message = message;
    };

    try {
      const data: AuthResponseDTO = await AuthService.signin({
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

  const signUp = async (user: { email: string; password: string }) => {
    type Request = {
      status: number;
      message: string;
    };

    const request = reactive<Request>({
      status: 200,
      message: "Ok",
    });

    const handelRequest = (status: number, message: string) => {
      request.status = status;
      request.message = message;
    };

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
  };
  return { session, isSigned, signIn, signUp, signOut };
});
