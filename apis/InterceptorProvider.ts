import React, { useEffect } from 'react';
import instance from './instance';

interface IInterceptor {
  children: React.ReactElement | null;
}

function InterceptorProvider({ children }: IInterceptor) {
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
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
