import { GNB } from 'components';
import * as S from './Layout.styles';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GNB />
      <S.Container>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Container>
    </>
  );
}
