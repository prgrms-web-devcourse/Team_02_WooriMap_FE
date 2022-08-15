import { AxiosRequestConfig } from 'axios';

interface User {
  id: number;
  email: string;
  password: string;
  imageUrl: string | null;
  nickName: string;
  isCouple: boolean;
}

interface ITokenSet {
  accessToken: string;
}

export type LoginFormDataTypes = Pick<User, 'email' | 'password'>;

export type UserResponseType = Pick<
  User,
  'email' | 'imageUrl' | 'nickName' | 'isCouple'
>;

export interface ILoginResponse extends ITokenSet {
  member: UserResponseType;
}

export interface IRetryAxiosInstanceConfig extends AxiosRequestConfig {
  retry?: boolean;
}
