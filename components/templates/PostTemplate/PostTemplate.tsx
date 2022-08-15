import { useRouter } from 'next/router';
import { SubmitButton } from 'components';
import * as S from './PostTemplate.styles';

interface IPostTemplateProps {
  type: 'create' | 'edit' | 'detail';
  onSubmit?: (e: React.FormEvent<Element>) => Promise<void>;
  imageSection: React.ReactNode;
  contentSection: React.ReactNode;
}

export function PostTemplate({
  type,
  onSubmit,
  imageSection,
  contentSection,
}: IPostTemplateProps) {
  const router = useRouter();

  const onCancel = () => router.back();

  return (
    <S.Container onSubmit={onSubmit} id="post-write">
      <S.PostContent>
        <S.ImageSection>{imageSection}</S.ImageSection>
        <S.ContentSection>{contentSection}</S.ContentSection>
      </S.PostContent>
      {type !== 'detail' && (
        <S.Wrapper>
          <S.CancelButton id="post-write" size="small" onClick={onCancel}>
            수정 취소
          </S.CancelButton>
          <SubmitButton id="post-write" size="medium" variant="black">
            {type === 'create' ? '포스트 생성' : '포스트 수정'}
          </SubmitButton>
        </S.Wrapper>
      )}
    </S.Container>
  );
}
