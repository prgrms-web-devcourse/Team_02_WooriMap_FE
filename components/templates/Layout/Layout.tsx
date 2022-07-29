import { GNB } from 'components';
import * as S from './Layout.styles';

export function Layout({ children }: { children: React.ReactNode }) {
  /**
   * 로그인이 안되어 있으면, GNB를 보이지 않게 해야 합니다!
   *
   * 현재로써는 로그인 확인 기능이 없기 때문에 임의 변수로 해놨습니다.
   */

  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <GNB />}
      <S.Container>
        <S.Wrapper isLoggedIn={isLoggedIn}>{children}</S.Wrapper>
      </S.Container>
    </>
  );
}
