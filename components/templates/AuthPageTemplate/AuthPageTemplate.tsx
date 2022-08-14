import React, { FormHTMLAttributes } from 'react';
import Image from 'next/image';
import { FormBackground } from 'components';
import { logo } from 'public/image';
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
    <FormBackground {...props}>
      <S.AuthFlexWrapper justify="center" flexDirection="column" align="center">
        <Image src={logo} alt="main-logo" width={180} />
        <S.LogoTitle>WooriMap</S.LogoTitle>
      </S.AuthFlexWrapper>
      <S.ContentWrapper>
        {controls && (
          <S.Wrapper>
            <S.InputWrapper margin="3rem 3rem">{controls}</S.InputWrapper>
          </S.Wrapper>
        )}
        <S.ErrorMessage>{error}</S.ErrorMessage>
        <S.FooterWrapper>
          {trigger}
          {infoMessage}
        </S.FooterWrapper>
      </S.ContentWrapper>
    </FormBackground>
  );
}

export default AuthPageTemplate;
