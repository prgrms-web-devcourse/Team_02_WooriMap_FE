import Image from 'next/image';
import { logo } from 'public/image';
import * as S from './AuthLogoImage.styles';

export function AuthLogoImage() {
  return (
    <S.Wrapper>
      <Image src={logo} width={120} alt="main-logo" />
      <S.Title>WooriMap</S.Title>
    </S.Wrapper>
  );
}
