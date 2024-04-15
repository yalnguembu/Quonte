import type { UserDTO } from "@/services";

export class User {
  private user: UserDTO;
  isNull = true;

  constructor(data: UserDTO) {
    this.user = data;
    this.isNull = false;
  }

  get id() {
    return this.user.id;
  }

  get email() {
    return this.user.email;
  }

  get username() {
    return this.user.username ?? "";
  }

  get picture() {
    return this.user.picture ?? "";
  }

  get role() {
    return this.user.role ?? "";
  }
}

export const newNullUser = () => {
  const user = new User({} as UserDTO);
  user.isNull = true;
  return user;
};
