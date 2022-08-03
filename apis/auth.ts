import { NextRouter } from 'next/router';
import { HeadersDefaults, AxiosError } from 'axios';
import instance from 'apis/instance';
import { setCookie } from 'utils/cookie';
import { IApiResponse } from 'types/api';
import {
  IInputState,
  ISingnUpRes,
  ILoginFormData,
  ILoginResponse,
} from 'types';
import LocalStorage from 'utils/storage';
import { ITokenSet, IRetryAxiosInstanceConfig } from 'types/auth';

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
export async function signup({
  values,
  router,
}: {
  values: IInputState;
  router: NextRouter;
}): Promise<ISingnUpRes> {
  try {
    const { email, nickName, password } = values;

    const reqBody = {
      email,
      nickName,
      password,
    };

    const data = await instance
      .post<''>('/members/signup', reqBody)
      .then((response) => {
        if (response.status === 201) {
          router.push('/auth/signin');
          return {
            message: '',
          };
        }

        // throw new Error(response);
        const error = response as unknown as AxiosError;
        return error.response?.data;
      });

    return data as ISingnUpRes;
  } catch (error) {
    console.error(error);

    return {
      message: '서버에러',
    };
  }
}

export async function getNewAccessToken() {
  try {
    const accessToken = await instance
      .post<IApiResponse<ITokenSet>>('/fake/token', {
        refreshToken: LocalStorage.getItem<string>('refreshToken', ''),
      })
      .then((response) => response.data.data.accessToken);
    return accessToken;
  } catch (error) {
    return Promise.reject(error);
  }
}

export function getHeadersWithAuthorizationToken(
  _config: IRetryAxiosInstanceConfig,
) {
  const config = { ..._config };
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${LocalStorage.getItem<string>(
    'accessToken',
    '',
  )}`;
  return config;
}
