import * as S from './Layout.styles';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.PageContainer>
      <S.Container>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Container>
    </S.PageContainer>
  );
}
