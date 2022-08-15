import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import LocalStorage from 'utils/storage';
import { IRetryAxiosInstanceConfig } from 'types/auth';
import userState from 'core';
import {
  getNewAccessToken,
  getConfigWithAuthorizedHeadersBy,
  isAuthorization,
} from './helper';

function useAxiosInstance(baseURL?: string) {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const instanceRef = useRef(
    axios.create({
      baseURL: baseURL || process.env.NEXT_PUBLIC_BASE_URL,
      withCredentials: true,
    }),
  );

  useEffect(() => {
    const instance = instanceRef.current;

    const retry = async (_config: IRetryAxiosInstanceConfig) => {
      try {
        const accessToken = await getNewAccessToken();
        LocalStorage.setItem('accessToken', accessToken);
        const config = getConfigWithAuthorizedHeadersBy(_config);
        return await instance(config);
      } catch (error) {
        setUser(null);
        LocalStorage.removeItem('accessToken');
        return Promise.reject(error);
      }
    };

    const onResponseFulfilled = (config: AxiosResponse) => config;

    const onResponseRejected = async (error: AxiosError) => {
      const config = error.config as IRetryAxiosInstanceConfig;
      if (!error.response) return Promise.reject(error);
      if (error.response.status === 404) {
        const {
          data: { code },
        } = error.response as AxiosResponse;

        if (code === 'CP001') {
          window.alert('당신은 이별을 당했습니다. 로그아웃 합니다.');

          LocalStorage.removeItem('accessToken');
          setUser(null);

          router.replace('/auth/signin');

          return Promise.reject(error);
        }
      }
      if (error.response.status !== 401) return Promise.reject(error);
      if (isAuthorization(config.url)) return Promise.reject(error);
      if (!config.retry) {
        config.retry = true;
        return retry(config);
      }
      return Promise.reject(error);
    };

    const requestInterceptor = instance.interceptors.request.use((_config) => {
      return getConfigWithAuthorizedHeadersBy(_config);
    });

    const responseInterceptor = instance.interceptors.response.use(
      onResponseFulfilled,
      onResponseRejected,
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [router, setUser]);
  return instanceRef.current;
}

export default useAxiosInstance;
