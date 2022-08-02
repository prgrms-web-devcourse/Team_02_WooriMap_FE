import { useState } from 'react';
import * as S from './CoupleProfile.styles';
import { Profile } from 'components';

interface INickname {
  nickname: string | null;
}
interface ICoupleStartingDate {
  coupleStartingDate: string;
}
interface ICoupleProfileProps extends INickname, ICoupleStartingDate {
  coupleNickname: string;
}

function EachProfile({ nickname }: INickname) {
  return (
    <S.EachProfileContainer>
      <Profile width={128} height={128} path={null} isLink={false} />
      <S.Nickname>{nickname}</S.Nickname>
    </S.EachProfileContainer>
  );
}

function CoupleInfo({ coupleStartingDate }: ICoupleStartingDate) {
  const startingDate = new Date(coupleStartingDate);
  const currentDate = new Date();
  const plusDay = Math.floor(
    (currentDate.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    <S.CoupleInfoContainer>
      <S.DDay>{`D + ${plusDay}`}</S.DDay>
      <S.StartingDate>{`
      ${startingDate.getFullYear()} 
      ${startingDate.getMonth() + 1} 
      ${startingDate.getDate()}`}</S.StartingDate>
    </S.CoupleInfoContainer>
  );
}
export function CoupleProfile({
  nickname,
  coupleNickname,
  coupleStartingDate,
}: ICoupleProfileProps) {
  return (
    <S.Container>
      <EachProfile nickname={nickname} />
      <CoupleInfo coupleStartingDate={coupleStartingDate} />
      <EachProfile nickname={coupleNickname} />
    </S.Container>
  );
}
