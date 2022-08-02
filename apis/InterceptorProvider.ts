import React, { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { IApiResponse } from 'types/api';
import { IToken } from 'types/auth';
import LocalStorage from 'utils/storage';
import { useAuthContext } from 'contexts/AuthContext';
import instance from './instance';

interface IInterceptor {
  children: React.ReactElement | null;
}

interface IRetryAxiosInstanceConfig extends AxiosRequestConfig {
  retry?: boolean;
}

function InterceptorProvider({ children }: IInterceptor) {
  const { setUser } = useAuthContext();
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((_config) => {
      const token = LocalStorage.getItem<string>('accessToken', '');
      const config = { ..._config };
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      console.log(config);
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (config) => {
        return config;
      },
      async (error) => {
        const config = error.config as IRetryAxiosInstanceConfig;
        if (!error.response) return Promise.reject(error);
        if (error.response.status === 401) return Promise.reject(error);
        if (
          config.url === '/auth/token' ||
          config.url === '/auth/sigin' ||
          config.url === '/fake/signin'
        )
          return Promise.reject(error);
        if (!config.retry) {
          config.retry = true;
          return instance
            .post<IApiResponse<IToken>>('/auth/token')
            .then((response) => response.data.data)
            .then((token) => {
              const { accessToken } = token;
              LocalStorage.setItem('accessToken', accessToken);
              if (!config.headers) {
                config.headers = {};
              }
              config.headers.Authorization = `Bearer ${accessToken}`;
              return instance(config);
            })
            .catch(() => {
              setUser(null);
              if (!config.headers) {
                config.headers = {};
              }
              config.headers.Authorization = '';
              return instance(config);
            });
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
