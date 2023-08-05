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
      const infos: AuthResponseDTO = await AuthService.signin({
        requestBody: user,
      });
      session.value = new Session(infos);
      saveAccessToken(session.value.accessToken);
      saveRefreshToken(session.value.accessToken);
      setRequestHeaderToken(session.value.accessToken);
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
      const infos: AuthResponseDTO = await AuthService.signup({
        requestBody: user,
      });
      session.value = new Session(infos);
      saveAccessToken(session.value.accessToken);
      saveRefreshToken(session.value.accessToken);
      setRequestHeaderToken(session.value.accessToken);
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
      saveAccessToken(session.value.accessToken);
    } catch (error: AxiosError | any) {
      throw new AuthenticationError(error);
    }
  };

  const verifyAccessToken = async (accessToken: string) => {
    try {
      const user = await AuthService.verifyToken({
        requestBody: {
          accessToken,
        },
      });
      session.value = new Session(user);
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
    verifyAccessToken,
  };
});
