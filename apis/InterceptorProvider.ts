import React, { useEffect } from 'react';
import { getNewAccessToken, getHeadersWithAuthorizationToken } from 'apis/auth';
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
      return getNewAccessToken()
        .then((accessToken) => {
          LocalStorage.setItem('accessToken', accessToken);
          const config = getHeadersWithAuthorizationToken(_config);
          return instance(config);
        })
        .catch((_error) => {
          setUser(null);
          LocalStorage.removeItem('accessToken');
          LocalStorage.removeItem('refreshToken');
          return Promise.reject(_error);
        });
    };

    const requestInterceptor = instance.interceptors.request.use(
      getHeadersWithAuthorizationToken,
    );

    const responseInterceptor = instance.interceptors.response.use(
      (config) => {
        return config;
      },
      async (error) => {
        const config = error.config as IRetryAxiosInstanceConfig;
        if (!error.response) return Promise.reject(error);
        if (error.response.status !== 401) return Promise.reject(error);
        if (
          config.url === '/auth/token' ||
          config.url === '/auth/signin' ||
          config.url === '/fake/signin' ||
          config.url === '/fake/token'
        )
          return Promise.reject(error);
        if (!config.retry) {
          config.retry = true;
          return retry(config);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [setUser]);
  return children;
}

export default InterceptorProvider;
