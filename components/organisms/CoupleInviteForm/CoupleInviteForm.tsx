import { useState, ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ITextInputProps } from 'types';
import userState from 'core';
import { TextInput } from 'components';
import { useAxiosInstance } from 'hooks';
import { getLinkCouple, getCheckIsCoupled } from 'apis/couple';
import { updateUserInfoWhenCoupleLinked } from 'apis/members';
import * as S from './CoupleInviteForm.styles';

interface ICoupleInviteFormProps extends ITextInputProps {
  code: string | null;
}

export function CoupleInviteForm({ code }: ICoupleInviteFormProps) {
  const router = useRouter();
  const [inputCode, setInputCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const setUser = useSetRecoilState(userState);
  const instance = useAxiosInstance();

  const onClickInviteButton = async () => {
    // 커플 맺기 버튼 눌렀을 때,
    const {
      data: { accessToken },
    } = await getLinkCouple({
      instance,
      code: inputCode,
    });

    if (!accessToken) setError('유효하지 않은 코드입니다.');
    else {
      await updateUserInfoWhenCoupleLinked({
        instance,
        accessToken,
        setUser,
      });

      router.replace('/');
    }
  };

  const checkIsCoupled = async () => {
    // 커플 연결 확인 눌렀을 때,
    const {
      data: { accessToken },
    } = await getCheckIsCoupled({
      instance,
    });

    if (!accessToken)
      setError('상대방이 아직 수락하지 않았습니다. 조금만 기다려주세요!');
    else {
      updateUserInfoWhenCoupleLinked({
        instance,
        accessToken,
        setUser,
      });
      router.replace('/profile');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
    setError('');
  };

  const onClickDeleteButton = () => {
    setInputCode('');
    setError('');
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.CoupleInviteFormBackground onSubmit={onSubmit}>
      <S.TitleWrapper>
        <S.Title>커플 맺기</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.CodeWrapper>
          <S.Wrapper>
            <S.Label>내 코드</S.Label>
            <S.Code> {code && code}</S.Code>
          </S.Wrapper>
          <S.Wrapper>
            <S.Label>상대 코드</S.Label>
            <TextInput
              value={inputCode}
              onClickButton={onClickDeleteButton}
              onChange={onChange}
            />
          </S.Wrapper>
        </S.CodeWrapper>
        <S.InviteButtonWrapper>
          <S.InviteButton
            size="large"
            variant="black"
            onClick={onClickInviteButton}
            disabled={inputCode.length === 0}
          >
            커플 맺기
          </S.InviteButton>
          <S.InviteConfrimButton size="large" onClick={checkIsCoupled}>
            커플 맺음 확인하기
          </S.InviteConfrimButton>
        </S.InviteButtonWrapper>

        <S.Error>{error && error}</S.Error>

        <Link href="/profile">
          <S.Back>프로필 페이지로 돌아가기</S.Back>
        </Link>
      </S.ContentWrapper>
    </S.CoupleInviteFormBackground>
  );
}
