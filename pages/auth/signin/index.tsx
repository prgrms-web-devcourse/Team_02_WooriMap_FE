import React, { useCallback, useState } from 'react';
import { AuthPageTemplate } from 'components/templates/AuthPageTemplate';
import { Button, TextInput } from 'components';

type LoginFormKeyType = 'email' | 'password';

type LoginFormType = {
  [key in LoginFormKeyType]: string;
};

function Signin() {
  const [data, setData] = useState<LoginFormType>({ email: '', password: '' });
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
      }}
      inputs={
        <>
          <TextInput
            value={data.email}
            onChange={changeValue('email')}
            onClickButton={() => resetValue('email')}
            className="input-wrapper"
          />
          <TextInput
            value={data.password}
            type="password"
            onChange={changeValue('password')}
            onClickButton={() => resetValue('password')}
            className="input-wrapper"
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
          회원이 아니신가요? <span>회원 가입</span>
        </p>
      }
    />
  );
}

export default Signin;
