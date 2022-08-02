import Image from 'next/image';
import MainLogo from 'public/image/main-logo-auth.svg';
import * as S from './AuthLogoImage.styles';

export function AuthLogoImage() {
  return (
    <S.Wrapper>
      <Image src={MainLogo} width={174} height={134} alt="main-logo" />
    </S.Wrapper>
  );
}
