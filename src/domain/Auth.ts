import type { AuthDTO } from "@/services/bespace";

export class Auth {
  private auth: AuthDTO;

  constructor(data: AuthDTO) {
    this.auth = data;
  }

  get email() {
    return this.auth.email;
  }

  set email(data: string) {
    this.auth.email = data;
  }

  get password() {
    return this.auth.email;
  }

  set password(data: string) {
    this.auth.email = data;
  }
}
