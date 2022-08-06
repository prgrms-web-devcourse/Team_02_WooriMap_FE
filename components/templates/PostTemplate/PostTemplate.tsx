import { Button } from 'components';
import * as S from './PostTemplate.styles';

export function PostTemplate({
  type,
  onSubmit,
  imageSection,
  contentSection,
}: {
  type: 'create' | 'edit';
  onSubmit: (e: React.FormEvent<Element>) => Promise<void>;
  imageSection: React.ReactNode;
  contentSection: React.ReactNode;
}) {
  return (
    <S.Container onSubmit={onSubmit} id="post-write">
      <S.ImageSection>{imageSection}</S.ImageSection>
      <S.ContentSection>{contentSection}</S.ContentSection>
      <S.Wrapper>
        <Button id="post-write" size="small">
          취소
        </Button>
        <Button id="post-write" size="medium" variant="black">
          {type === 'create' ? '포스트 생성' : '포스트 수정'}
        </Button>
      </S.Wrapper>
    </S.Container>
  );
}
