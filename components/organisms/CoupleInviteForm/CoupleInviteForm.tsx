import { useState } from 'react';
import { ITextInputProps } from 'types';
import Link from 'next/link';
import { TextInput } from 'components';
import * as S from './CoupleInviteForm.styles';

interface ICoupleInviteFormProps extends ITextInputProps {
  code: string;
}

export function CoupleInviteForm({
  code,
  name,
  deleteAll,
}: ICoupleInviteFormProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  const onClickInviteButton = () => {
    // API관련 로직
    setIsAccepted(true);
  };

  const checkIsCoupled = () => {
    // API관련 로직
  };

  const onClickDeleteButton = () => {
    if (deleteAll && name) deleteAll(name);
  };

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

        <S.Container>
          <S.Wrapper>
            <S.Label>상대 코드</S.Label>
            <TextInput
              value={code as string}
              onClickButton={onClickDeleteButton}
            />
          </S.Wrapper>
        </S.Container>
        {/*
        <TextInputWithLabel
          variant="input"
          error=""
          name="codeInput"
          text="상대 코드"
        /> */}
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
