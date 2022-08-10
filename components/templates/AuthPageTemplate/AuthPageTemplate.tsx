import React, { FormHTMLAttributes } from 'react';
import Image from 'next/image';
import { FormBackground } from 'components';
import mainLogoVertical from 'public/image/main-logo-vertical.svg';
import * as S from './AuthPageTemplate.styles';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  controls: React.ReactNode;
  trigger: React.ReactNode;
  infoMessage: React.ReactNode;
  error?: React.ReactNode;
}

function AuthPageTemplate({
  controls,
  trigger,
  infoMessage,
  error,
  ...props
}: Partial<IProps>) {
  return (
    <FormBackground {...props} style={{ margin: '2rem auto', padding: '5rem' }}>
      <S.FlexWrapper justify="center">
        <Image
          src={mainLogoVertical}
          alt="main-logo"
          width={240}
          height={145}
        />
      </S.FlexWrapper>
      {controls && (
        <S.Wrapper>
          <S.InputWrapper margin="2rem 0">{controls}</S.InputWrapper>
        </S.Wrapper>
      )}
      <S.ErrorMessage>{error}</S.ErrorMessage>
      <S.FooterWrapper margin="7rem 0 0 0">
        {trigger}
        {infoMessage}
      </S.FooterWrapper>
    </FormBackground>
  );
}

export default AuthPageTemplate;
