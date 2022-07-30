import Image from 'next/image';
import { LoggedInSection } from 'components';
import mainLogo from 'public/image/main-logo.svg';
import * as S from './NavBar.styles';

export function NavBar() {
  return (
    <S.Container>
      <S.Wrapper>
        <Image src={mainLogo} alt="main-logo" width={240} height={40} />
        <LoggedInSection />
      </S.Wrapper>
    </S.Container>
  );
}
