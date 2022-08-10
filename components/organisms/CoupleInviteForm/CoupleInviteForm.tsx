import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ITextInputProps } from 'types';
import { TextInput } from 'components';
import { useAxiosInstance } from 'hooks';
import LocalStorage from 'utils/storage';
import { getLinkCouple, getCheckIsCoupled } from 'apis/couple';
import * as S from './CoupleInviteForm.styles';

interface ICoupleInviteFormProps extends ITextInputProps {
  code: string | null;
}

export function CoupleInviteForm({ code, name }: ICoupleInviteFormProps) {
  const router = useRouter();
  const [inputCode, setInputCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const instance = useAxiosInstance();

  const onClickInviteButton = async () => {
    const {
      data: { accessToken },
    } = await getLinkCouple({
      instance,
      code: inputCode,
    });

    if (!accessToken) setError('유효하지 않은 코드입니다.');
    else {
      LocalStorage.setItem('accessToken', accessToken);
      router.replace('/');
    }
  };

  const checkIsCoupled = async () => {
    const {
      data: { accessToken },
    } = await getCheckIsCoupled({
      instance,
    });

    if (!accessToken)
      setError('상대방이 아직 수락하지 않았습니다. 조금만 기다려주세요!');
    else {
      LocalStorage.setItem('accessToken', accessToken);
      router.replace('/');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputCode(e.target.value);

  const onClickDeleteButton = () => setInputCode('');

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(error);

  return (
    <S.CoupleInviteFormBackground onSubmit={onSubmit}>
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
              value={inputCode}
              onClickButton={onClickDeleteButton}
              onChange={onChange}
            />
          </S.Wrapper>
        </S.Container>
      </S.CodeWrapper>

      <S.InviteButton
        size="xlarge"
        variant="black"
        onClick={onClickInviteButton}
        disabled={inputCode.length === 0}
      >
        커플 맺기
      </S.InviteButton>
      <S.InviteConfrimButton size="xlarge" onClick={checkIsCoupled}>
        커플 맺음 확인하기
      </S.InviteConfrimButton>

      <Link href="/profile">
        <S.Back>돌아가기</S.Back>
      </Link>
    </S.CoupleInviteFormBackground>
  );
}
