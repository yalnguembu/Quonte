import { User } from "@/domain/User";
import { UserService, type UserDTO } from "@/services";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const fetchUserByUsername = async (username: string): User => {
    let user: UserDTO;
    try {
      user = await UserService.fectUserByUsername({ username });
      return new User(user);
    } catch (error: unknown) {
      console.log(error);
    }
  };
  return { fetchUserByUsername };
});
