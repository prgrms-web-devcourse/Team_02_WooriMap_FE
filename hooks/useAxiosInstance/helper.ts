import LocalStorage from 'utils/storage';
import { IApiResponse } from 'types/api';
import { ITokenSet, IRetryAxiosInstanceConfig } from 'types/auth';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

// ANCHOR: 해당 함수는 클라이언트에서만 사용이 가능함
export async function getNewAccessToken() {
  try {
    const headers: AxiosRequestHeaders = {
      Authorization: `Bearer ${LocalStorage.getItem('accessToken', '')}`,
    };

    const response: AxiosResponse<IApiResponse<ITokenSet>> = await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/token`,
      withCredentials: true,
      headers,
    });

    const { accessToken } = response.data.data;

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
