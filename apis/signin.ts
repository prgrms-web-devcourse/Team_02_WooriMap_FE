import instance from 'apis/instance';
import LocalStorage from 'utils/storage';
import { IApiResponse } from 'types/api';
import { ITokenSet, IRetryAxiosInstanceConfig } from 'types/auth';

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
