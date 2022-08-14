import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import {
  AuthPageTemplate,
  AuthPageRoutingButton,
  Button,
  TextInput,
  FormControl,
} from 'components';
import { useAxiosInstance } from 'hooks';
import { LoginFormDataTypes, ILoginResponse } from 'types/auth';
import { IApiResponse } from 'types/api';
import LocalStorage from 'utils/storage';
import userState from 'core';
import { withSigninSignout } from 'hocs';

type LoginFormKeyType = 'email' | 'password';

type LoginFormType = {
  [key in LoginFormKeyType]: string;
};

function Signin() {
  const router = useRouter();
  const [data, setData] = useState<LoginFormType>({ email: '', password: '' });
  const [, setLoading] = useState(false);
  const setUser = useSetRecoilState(userState);
  const instance = useAxiosInstance();
  const [error, setError] = useState<string>('');
  const changeValue = useCallback(
    (key: LoginFormKeyType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [key]: e.target.value }));
    },
    [],
  );
  const resetValue = useCallback((key: LoginFormKeyType) => {
    setData((prev) => ({ ...prev, [key]: '' }));
  }, []);

  const login = async (loginFormData: LoginFormDataTypes) => {
    try {
      const userData = await instance
        .post<IApiResponse<ILoginResponse>>('/auth/signin', {
          ...loginFormData,
        })
        .then((response) => response.data.data);

      setUser(userData.member);
      LocalStorage.setItem('accessToken', userData.accessToken);
      return userData;
    } catch (_error) {
      return Promise.reject(_error);
    }
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      await login({ ...data });
      router.push('/');
    } catch {
      setError('이메일 또는 비밀번호가 다릅니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPageTemplate
      onSubmit={async (e) => {
        e.preventDefault();
        await onSubmit();
      }}
      controls={
        <>
          <FormControl
            label="이메일"
            input={
              <TextInput
                value={data.email}
                type="email"
                onChange={changeValue('email')}
                onClickButton={() => resetValue('email')}
                className="input-wrapper"
                placeholder="your-email@email.com"
              />
            }
          />
          <FormControl
            label="비밀번호"
            input={
              <TextInput
                value={data.password}
                type="password"
                onChange={changeValue('password')}
                onClickButton={() => resetValue('password')}
                className="input-wrapper"
                placeholder="your-password"
              />
            }
          />
        </>
      }
      trigger={
        <Button size="xlarge" type="submit">
          로그인
        </Button>
      }
      infoMessage={<AuthPageRoutingButton type="signin" />}
      error={error && <p>{error}</p>}
      noValidate
    />
  );
}

export default withSigninSignout(Signin);
