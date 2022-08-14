import LocalStorage from 'utils/storage';
import { IApiResponse } from 'types/api';
import { ITokenSet, IRetryAxiosInstanceConfig } from 'types/auth';
import { AxiosInstance } from 'axios';

export async function getNewAccessToken(instance: AxiosInstance) {
  try {
    const accessToken = await instance
      .post<IApiResponse<ITokenSet>>('/auth/token')
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
  const authorizationUrlList = ['/auth/token', '/auth/signin'];
  if (!url) return false;
  return authorizationUrlList.includes(url);
}
