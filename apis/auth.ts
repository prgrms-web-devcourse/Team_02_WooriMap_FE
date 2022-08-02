import { NextRouter } from 'next/router';
import { HeadersDefaults } from 'axios';
import instance from 'apis/instance';
import { setCookie } from 'utils/cookie';
import { IApiResponse } from 'types/api';
import {
  IInputState,
  ISingnUpRes,
  ILoginFormData,
  ILoginResponse,
} from 'types';

interface HeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export function setToken(token: string) {
  // set headers
  const { headers } = instance.defaults;
  instance.defaults.headers = {
    ...headers,
    Authorization: `Bearer ${token}`,
  } as HeaderProperties;

  setCookie('accessToken', token, { path: '/' });
}

export async function login(formData: ILoginFormData) {
  try {
    const data = await instance
      .post<IApiResponse<ILoginResponse>>('/signin', formData)
      .then((response) => response.data.data);
    setCookie('accessToken', data.accessToken, { path: '/' });
    setCookie('refreshToken', data.refreshToken, { path: '/' });
    return data;
  } catch (error) {
    throw new Error('error occurred at login.');
  }
}
export async function signup({
  values,
  router,
}: {
  values: IInputState;
  router: NextRouter;
}): Promise<ISingnUpRes> {
  try {
    const { email, nickName, password } = values;

    const reqBody = {
      email,
      nickName,
      password,
    };

    const data = await instance
      .post('/members/signup', reqBody)
      .then((response) => {
        if (response.status === 201) {
          router.push('/signin');
          return {
            message: '',
          };
        }

        return response.response.data;
      });

    return data;
  } catch (error) {
    console.error(error);

    return {
      message: '서버에러',
    };
  }
}
