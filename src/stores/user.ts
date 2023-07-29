import { defineStore } from "pinia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reactive, ref } from "vue";
import type { UserDTO } from "@/services/bespace";

export const useUserStore = defineStore("user", () => {
  const user = ref<UserDTO | null>();

  const getAllInformations = async (id: number) => {
    user.value = {
      id: id,
      creationDate: "",
      updateAt: "",
      email: "admin@bespace.com",
      firstName: "admin",
      lastName: "user",
    };
  };
  return { user, getAllInformations };
});
