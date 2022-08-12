import { LoggedInSection } from 'components';
import { headerLogo } from 'public/image';
import * as S from './NavBar.styles';

export function NavBar() {
  return (
    <S.Container>
      <S.HeaderLogo src={headerLogo} alt="메인로고" />
      <LoggedInSection />
    </S.Container>
  );
}
