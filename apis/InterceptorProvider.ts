import React, { useEffect } from 'react';
import LocalStorage from 'utils/storage';
import instance from './instance';

interface IInterceptor {
  children: React.ReactElement | null;
}

function InterceptorProvider({ children }: IInterceptor) {
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((_config) => {
      const token = LocalStorage.getItem<string>('accessToken', '');
      const config = { ..._config };
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (config) => config,
      (error) => error,
    );
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return children;
}

export default InterceptorProvider;
