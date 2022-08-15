import { useRouter } from 'next/router';
import { Button, SubmitButton, Modal } from 'components';
import { useState } from 'react';
import * as S from './PostTemplate.styles';

interface IPostTemplateProps {
  type: 'create' | 'edit' | 'detail';
  onSubmit?: (e: React.FormEvent<Element>) => Promise<void>;
  imageSection: React.ReactNode;
  contentSection: React.ReactNode;
  isChanged?: boolean;
}

export function PostTemplate({
  type,
  onSubmit,
  imageSection,
  contentSection,
  isChanged,
}: IPostTemplateProps) {
  const [confirmCancel, setConfirmCancel] = useState<boolean>(false);

  const router = useRouter();

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isChanged) {
      setConfirmCancel(true);
      return;
    }
    router.back();
  };

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
      <Modal
        isVisible={confirmCancel}
        onClose={() => {
          setConfirmCancel(false);
        }}
      >
        <S.ModalContainer>
          <S.ModalTitle>취소 확인</S.ModalTitle>
          <S.ModalContent>
            작성 내용은 저장되지 않아요! 그래도 돌아갈까요?
          </S.ModalContent>
          <S.ModalOptions>
            <S.ModalOption size="small" onClick={() => router.back()}>
              확인
            </S.ModalOption>
            <S.ModalOption
              size="small"
              onClick={() => {
                setConfirmCancel(false);
              }}
            >
              취소
            </S.ModalOption>
          </S.ModalOptions>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
