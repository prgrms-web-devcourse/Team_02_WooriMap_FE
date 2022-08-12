import { NavBar } from 'components';
import { useRouter } from 'next/router';
import * as S from './Layout.styles';

export function Layout({ children }: { children: React.ReactNode }) {
  const { asPath } = useRouter();

  const isAuthPage = asPath.includes('/signin') || asPath.includes('/signup');

  return (
    <S.PageContainer>
      <S.Container>
        {!isAuthPage && <NavBar />}
        <S.Wrapper>{children}</S.Wrapper>
      </S.Container>
    </S.PageContainer>
  );
}
