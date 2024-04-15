import type { AuthResponseDTO } from "@/services";

export class Session {
  private auth: AuthResponseDTO;
  isNull = true;

  constructor(data: AuthResponseDTO) {
    this.auth = data;
    this.isNull = false;
  }

  get id() {
    return this.auth.id;
  }

  get email() {
    return this.auth.email ?? "";
  }

  get username() {
    return this.auth.username ?? "";
  }

  get picture() {
    return this.auth.picture ?? "";
  }

  get accessToken() {
    return this.auth.accessToken;
  }

  get refreshToken() {
    return this.auth.refresh_token;
  }

  set accessToken(token: string) {
    this.accessToken = token;
  }

  set refreshToken(token: string) {
    this.refreshToken = token;
  }
}

export const newNullSession = () => {
  const session = new Session({} as AuthResponseDTO);
  session.isNull = true;
  return session;
};
