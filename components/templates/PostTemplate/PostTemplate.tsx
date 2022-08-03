import * as S from './PostTemplate.styles';

export function PostTemplate({
  imageSection,
  contentSection,
}: {
  imageSection: React.ReactNode;
  contentSection: React.ReactNode;
}) {
  return (
    <S.Container>
      <S.ImageSection>{imageSection}</S.ImageSection>
      <S.ContentSecion>{contentSection}</S.ContentSecion>
    </S.Container>
  );
}
