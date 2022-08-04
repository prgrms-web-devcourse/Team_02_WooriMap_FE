import React, { useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import {
  getNewAccessToken,
  getConfigWithAuthorizedHeadersBy,
  isAuthorization,
} from 'apis/auth';
import LocalStorage from 'utils/storage';
import { useAuthContext } from 'contexts/AuthContext';
import { IRetryAxiosInstanceConfig } from 'types/auth';
import instance from './instance';

interface IInterceptor {
  children: React.ReactElement | null;
}

function InterceptorProvider({ children }: IInterceptor) {
  const { setUser } = useAuthContext();

  useEffect(() => {
    const retry = async (_config: IRetryAxiosInstanceConfig) => {
      try {
        const accessToken = await getNewAccessToken();
        LocalStorage.setItem('accessToken', accessToken);
        const config = getConfigWithAuthorizedHeadersBy(_config);
        return await instance(config);
      } catch (error) {
        setUser(null);
        LocalStorage.removeItem('accessToken');
        LocalStorage.removeItem('refreshToken');
        return Promise.reject(error);
      }
    };

    const onResponseFulfilled = (config: AxiosResponse) => config;

    const onResponseRejected = async (error: AxiosError) => {
      const config = error.config as IRetryAxiosInstanceConfig;
      if (!error.response) return Promise.reject(error);
      if (error.response.status !== 401) return Promise.reject(error);
      if (isAuthorization(config.url)) return Promise.reject(error);
      if (!config.retry) {
        config.retry = true;
        return retry(config);
      }
      return Promise.reject(error);
    };

    const requestInterceptor = instance.interceptors.request.use(
      getConfigWithAuthorizedHeadersBy,
    );

    const responseInterceptor = instance.interceptors.response.use(
      onResponseFulfilled,
      onResponseRejected,
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [setUser]);
  return children;
}

export default InterceptorProvider;
