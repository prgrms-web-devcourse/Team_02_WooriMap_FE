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
      <S.ContentSection>{contentSection}</S.ContentSection>
    </S.Container>
  );
}
