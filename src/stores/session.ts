import { defineStore } from "pinia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosError } from "axios";
import {
  saveAccessToken,
  saveRefreshToken,
  setRequestHeaderToken,
  getAccessToken,
} from "@/utils/api-config";
import { computed, ref } from "vue";
import type { AuthResponseDTO } from "@/services";
import { AuthService } from "@/services";
import { Session, newNullSession } from "@/domain/Session";
import { AuthenticationError } from "@/utils/error";

export const useSessionStore = defineStore("session", () => {
  // const session = ref<Session | null>(null);
  const session = ref<Session>(newNullSession());

  const isSigned = computed(() => {
    return !session.value.isNull;
  });

  const signIn = async (user: { email: string; password: string }) => {
    try {
      const data: AuthResponseDTO = await AuthService.signin({
        requestBody: user,
      });
      session.value = new Session(data);
      saveAccessToken(session.value.accessToken);
      saveRefreshToken(session.value.accessToken);
      setRequestHeaderToken(data.access_token);
      return { success: true, message: "connected successfully" };
    } catch (error: AxiosError | any) {
      throw new AuthenticationError(error);
    }
  };

  const signUp = async (user: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const data: AuthResponseDTO = await AuthService.signup({
        requestBody: user,
      });
      session.value = new Session(data);
      saveAccessToken(session.value.accessToken);
      saveRefreshToken(session.value.accessToken);
      setRequestHeaderToken(data.access_token);
      return { succes: true };
    } catch (error: AxiosError | any) {
      throw new AuthenticationError(error);
    }
  };

  const refreshToken = async (token: string) => {
    try {
      const response = await AuthService.refreshToken({
        requestBody: { refresh_token: token },
      });
      session.value = new Session({ ...response, refresh_token: token });
      saveAccessToken(response.access_token ?? "");
    } catch (error: AxiosError | any) {
      throw new AuthenticationError(error);
    }
  };

  const signOut = () => {
    session.value = newNullSession();
    localStorage.clear();
  };

  return {
    session,
    isSigned,
    signIn,
    signUp,
    signOut,
    getAccessToken,
    refreshToken,
  };
});
