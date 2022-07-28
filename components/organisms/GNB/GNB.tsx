import Image from 'next/image';
import mainLogo from 'public/image/main-logo.svg';
import * as S from './GNB.styles';

export function GNB() {
  return (
    <S.Container>
      <S.Wrapper>
        <Image src={mainLogo} alt="main-logo" width={240} height={40} />
      </S.Wrapper>
    </S.Container>
  );
}
