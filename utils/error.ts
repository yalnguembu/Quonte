import type { AxiosError } from "axios";
import { API_ERROR_MESSAGE } from "./enum";

export class ApiError implements Error {
  protected error: AxiosError;
  private _name: string | undefined;
  protected _message: string | undefined;

  public get message(): string {
    return this._message ?? "";
  }

  public get name(): string {
    return this._name ?? "";
  }

  constructor(data: AxiosError) {
    this.error = data;
    this._name = data.name;
    this._message = data.message;
  }

  get status() {
    switch (this.error.response?.status) {
      case 402:
        return API_ERROR_MESSAGE.ALREADY_EXIST;
      case 400:
        return API_ERROR_MESSAGE.BAD_REQUEST;
      case 403:
        return API_ERROR_MESSAGE.FORBIDDEN;
      default:
        return API_ERROR_MESSAGE.NOT_FOUND;
    }
  }
}

export class AuthenticationError extends ApiError {
  constructor(data: AxiosError) {
    super(data);
  }

  get message() {
    switch (this.status) {
      case API_ERROR_MESSAGE.ALREADY_EXIST:
        return "Email already taken";
      case API_ERROR_MESSAGE.NOT_FOUND:
        return "Network error please check your internet connection";
      case API_ERROR_MESSAGE.FORBIDDEN:
        return "Sorry your email or password is wrong";
      default:
        return "Sommething went wrong please retry later";
    }
  }
}
