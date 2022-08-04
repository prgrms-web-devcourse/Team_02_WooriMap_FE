import React, { useCallback, useState } from 'react';
import { AuthPageTemplate } from 'components/templates/AuthPageTemplate';
import { Button, TextInput } from 'components';
import { useAuthContext } from 'contexts/AuthContext';
import Link from 'next/link';

type LoginFormKeyType = 'email' | 'password';

type LoginFormType = {
  [key in LoginFormKeyType]: string;
};

function Signin() {
  const [data, setData] = useState<LoginFormType>({ email: '', password: '' });
  const { login } = useAuthContext();
  const changeValue = useCallback(
    (key: LoginFormKeyType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [key]: e.target.value }));
    },
    [],
  );
  const resetValue = useCallback((key: LoginFormKeyType) => {
    setData((prev) => ({ ...prev, [key]: '' }));
  }, []);
  return (
    <AuthPageTemplate
      onSubmit={(e) => {
        e.preventDefault();
        login({ ...data });
      }}
      inputs={
        <>
          <TextInput
            value={data.email}
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
      infoMessage={
        <p>
          회원이 아니신가요? <Link href="/auth/signup">회원 가입</Link>
        </p>
      }
    />
  );
}

export default Signin;
