import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthPageTemplate } from 'components/templates/AuthPageTemplate';
import { AuthPageRoutingButton, Button, TextInput } from 'components';
import { useAuthContext } from 'contexts/AuthContext';
import { ILoginFormData, ILoginResponse } from 'types/auth';
import { IApiResponse } from 'types/api';
import LocalStorage from 'utils/storage';
import { useAxiosContext } from 'contexts/AxiosContext';

type LoginFormKeyType = 'email' | 'password';

type LoginFormType = {
  [key in LoginFormKeyType]: string;
};

function Signin() {
  const router = useRouter();
  const [data, setData] = useState<LoginFormType>({ email: '', password: '' });
  const [, setLoading] = useState(false);
  const [, setUser] = useAuthContext();
  const instance = useAxiosContext();
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

  const login = async (loginFormData: ILoginFormData) => {
    try {
      const userData = await instance
        .post<IApiResponse<ILoginResponse>>('/fake/signin', {
          ...loginFormData,
        })
        .then((response) => response.data.data);

      setUser(userData.member);
      LocalStorage.setItem('accessToken', userData.accessToken);
      LocalStorage.setItem('refreshToken', userData.refreshToken);
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
      inputs={
        <>
          <TextInput
            value={data.email}
            type="email"
            onChange={changeValue('email')}
            onClickButton={() => resetValue('email')}
            className="input-wrapper"
            placeholder="your-email@email.com"
          />
          <TextInput
            value={data.password}
            type="password"
            onChange={changeValue('password')}
            onClickButton={() => resetValue('password')}
            className="input-wrapper"
            placeholder="your-password"
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

export default Signin;
