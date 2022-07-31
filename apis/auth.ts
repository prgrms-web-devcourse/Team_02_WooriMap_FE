import { HeadersDefaults } from 'axios';
import instance from 'apis/instance';
import { IApiResponse } from 'types/api';
import { setCookie } from 'utils/cookie';

interface HeaderProperties extends HeadersDefaults {
  Authorization: string;
}

interface IEmail {
  email: string;
}
interface ILoginFormData extends IEmail {
  password: string;
}

interface ITokenSet {
  accessToken: string;
  refreshToken: string;
}

interface IUserResponse extends IEmail {
  nickName: string;
}

interface ILoginResponse extends ITokenSet {
  member: IUserResponse;
}

export function setToken(token: string) {
  // set headers
  const { headers } = instance.defaults;
  instance.defaults.headers = {
    ...headers,
    Authorization: `Bearer ${token}`,
  } as HeaderProperties;

  setCookie('accessToken', token, { path: '/' });
}

export async function login(formData: ILoginFormData) {
  try {
    const data = await instance
      .post<IApiResponse<ILoginResponse>>('/signin', formData)
      .then((response) => response.data.data);
    setToken(data.accessToken);
    return data;
  } catch (error) {
    throw new Error('error occurred at login.');
  }
}
