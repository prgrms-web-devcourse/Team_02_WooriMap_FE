import * as S from './PostTemplate.styles';

export function PostTemplate({
  onSubmit,
  imageSection,
  contentSection,
}: {
  onSubmit: React.FormEventHandler;
  imageSection: React.ReactNode;
  contentSection: React.ReactNode;
}) {
  return (
    <S.Container onSubmit={onSubmit}>
      <S.ImageSection>{imageSection}</S.ImageSection>
      <S.ContentSection>{contentSection}</S.ContentSection>
      <S.Wrapper>
        <input type="submit" />
      </S.Wrapper>
    </S.Container>
  );
}
