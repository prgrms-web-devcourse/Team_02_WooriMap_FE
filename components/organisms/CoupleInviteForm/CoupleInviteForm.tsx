import { useState } from 'react';
import Link from 'next/link';
import { TextInputWithLabel } from 'components';
import * as S from './CoupleInviteForm.styles';

interface ICoupleInviteFormProps {
  code: string;
}

export function CoupleInviteForm({ code }: ICoupleInviteFormProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  const onClickInviteButton = () => {
    // API관련 로직
    setIsAccepted(true);
  };

  const checkIsCoupled = () => {};

  return (
    <S.CoupleInviteFormBackground>
      <S.Title>커플 맺기</S.Title>
      <S.CodeWrapper>
        <S.Container>
          <S.Wrapper>
            <S.Label>내 코드</S.Label>
            <S.Code> {code && code}</S.Code>
          </S.Wrapper>
        </S.Container>

        <TextInputWithLabel error="" name="codeInput" text="상대 코드" />
        {/* textInputWithLabel에 fontSize 넣을 수 있도록 추후 리팩토링 필요 일부분 */}
      </S.CodeWrapper>
      {isAccepted ? (
        <S.InviteButton size="xlarge" variant="black" disabled>
          커플 맺기
        </S.InviteButton>
      ) : (
        <S.InviteButton
          size="xlarge"
          variant="black"
          onClick={onClickInviteButton}
        >
          커플 맺기
        </S.InviteButton>
      )}

      <S.InviteConfrimButton size="xlarge" onClick={checkIsCoupled}>
        커플 맺음 확인하기
      </S.InviteConfrimButton>

      <Link href="/">
        <S.Back>돌아가기</S.Back>
      </Link>
    </S.CoupleInviteFormBackground>
  );
}
