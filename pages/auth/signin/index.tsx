import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { Button, FormBackground, TextInput } from 'components';
import mainLogoVertical from 'public/image/main-logo-vertical.svg';
import * as S from './Signin.styles';

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
    <FormBackground style={{ margin: '2rem auto' }}>
      <S.FlexWrapper justify="center" padding="2rem">
        <Image
          src={mainLogoVertical}
          alt="main-logo"
          width={240}
          height={145}
        />
      </S.FlexWrapper>
      <S.Wrapper>
        <S.InputWrapper margin="2rem 0">
          <TextInput
            value={data.email}
            onChange={changeValue('email')}
            onClickButton={() => resetValue('email')}
            className="input-wrapper"
          />
          <TextInput
            value={data.password}
            onChange={changeValue('password')}
            onClickButton={() => resetValue('password')}
            className="input-wrapper"
          />
        </S.InputWrapper>
      </S.Wrapper>
      <S.FooterWrapper margin="7rem 0">
        <Button size="large" type="submit">
          로그인
        </Button>
        <p>
          회원이 아니신가요? <span>회원 가입</span>
        </p>
      </S.FooterWrapper>
    </FormBackground>
  );
}

export default Signin;
