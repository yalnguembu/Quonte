import { defineStore } from "pinia";
import axios, { type AxiosError } from "axios";
import { reactive, ref } from "vue";

type Session = {
  id: string;
  email: string;
  rolesList: string[];
  refresh?: string;
};

export const useSessionStore = defineStore("session", () => {
  const session = ref<Session | null>(null);

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

    try {
      const { data } = await axios.post("auth/signin", { ...user });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data?.access_token}`;
      session.value = {
        id: "test-id01-abcd-efgh",
        email: user.email,
        rolesList: ["super-admin"],
        refresh: "string",
      };
    } catch (error: AxiosError | any) {
      switch (error.response?.status) {
        case 404:
          request.status = error.response?.status;
          request.message = "Please check your inernect connection";
          break;
        case 400:
          request.status = error.response?.status;
          request.message = "Sorry your email and your password are wrong";
          break;
        case 403:
          request.status = error.response?.status;
          request.message = "Sorry your email or your password is wrong";
          break;
        default:
          request.status = error.response?.status;
          request.message = "Sorry and error has occured retry!";
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

    try {
      const { data } = await axios.post("auth/signup", { ...user });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data?.access_token}`;
      session.value = {
        id: "test-id01-abcd-efgh",
        email: user.email,
        rolesList: ["super-admin"],
        refresh: "string",
      };
    } catch (error: AxiosError | any) {
      request.status = error.response?.status;
      request.message = error.response?.statusText;
    }
    return request;
  };

  const signOut = () => {
    ///empty storage,...
    session.value = null;
  };
  return { session, isSigned, signIn, signUp, signOut };
});
