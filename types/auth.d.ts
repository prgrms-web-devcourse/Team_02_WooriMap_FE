import { AxiosRequestConfig } from 'axios';

interface IEmail {
  email: string;
}
export interface ILoginFormData extends IEmail {
  password: string;
}

interface ITokenSet {
  accessToken: string;
}

export interface IUserResponse extends IEmail {
  imageUrl: string | null;
  nickName: string;
  isCouple: boolean;
}

export interface ILoginResponse extends ITokenSet {
  member: IUserResponse;
}

export interface IRetryAxiosInstanceConfig extends AxiosRequestConfig {
  retry?: boolean;
}
