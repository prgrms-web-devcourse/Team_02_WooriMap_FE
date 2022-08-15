import { NavBar } from 'components';
import { useRecoilValueAfterMount } from 'hooks';
import userState from 'core';
import * as S from './Layout.styles';

export function Layout({ children }: { children: React.ReactNode }) {
  const user = useRecoilValueAfterMount(userState, null);

  return (
    <S.PageContainer>
      <S.Container>
        {user && <NavBar />}
        <S.Wrapper>{children}</S.Wrapper>
      </S.Container>
    </S.PageContainer>
  );
}
