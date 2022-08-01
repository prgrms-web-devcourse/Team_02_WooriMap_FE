import { useState } from 'react';
import Image from 'next/image';
import { FormBackground, TextInput } from 'components';
import mainLogoVertical from 'public/image/main-logo-vertical.svg';
import * as S from './Signin.styles';

interface ILoginForm {
  id: string;
  password: string;
}

function Signin() {
  const [data, setData] = useState<ILoginForm>({ id: '', password: '' });
  return (
    <FormBackground>
      <S.LogoWrapper justify="center">
        <Image
          src={mainLogoVertical}
          alt="main-logo"
          width={240}
          height={145}
        />
      </S.LogoWrapper>
      <S.InputWrapper>
        <TextInput />
        <TextInput />
      </S.InputWrapper>
    </FormBackground>
  );
}

export default Signin;
