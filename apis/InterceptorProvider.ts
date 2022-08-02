import React, { useEffect } from 'react';
import instance from './instance';

interface IInterceptor {
  children: React.ReactElement | null;
}

function InterceptorProvider({ children }: IInterceptor) {
  useEffect(() => {
    instance.interceptors.request.use((config) => {
      return config;
    });
    instance.interceptors.response.use(
      (config) => config,
      (error) => error,
    );
  }, []);
  return children;
}

export default InterceptorProvider;
