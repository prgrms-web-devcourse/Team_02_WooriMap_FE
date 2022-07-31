import { HeadersDefaults } from 'axios';
import instance from 'apis/instance';
import { setCookie } from 'utils/cookie';
import { IApiResponse } from 'types/api';
import { ILoginFormData, ILoginResponse } from 'types/auth';

interface HeaderProperties extends HeadersDefaults {
  Authorization: string;
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
    setCookie('accessToken', data.accessToken, { path: '/' });
    setCookie('refreshToken', data.refreshToken, { path: '/' });
    return data;
  } catch (error) {
    throw new Error('error occurred at login.');
  }
}
