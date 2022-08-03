import { NextRouter } from 'next/router';
import { AxiosError } from 'axios';
import instance from 'apis/instance';
import { IApiResponse } from 'types/api';
import { IInputState, ISingnUpRes } from 'types';
import LocalStorage from 'utils/storage';
import { ITokenSet, IRetryAxiosInstanceConfig } from 'types/auth';

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

export function getConfigWithAuthorizedHeadersBy(
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

export function isAuthorization(url: string | undefined) {
  const authorizationUrlList = [
    '/auth/token',
    '/auth/login',
    '/fake/token',
    '/fake/signin',
  ];
  if (!url) return false;
  return authorizationUrlList.includes(url);
}
