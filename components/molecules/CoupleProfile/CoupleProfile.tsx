import { ICoupleUserProps, IStartDateProps, ICoupleProfileProps } from 'types';
import { Profile } from 'components';
import { calculatingDDay } from 'utils';
import * as S from './CoupleProfile.styles';

function EachProfile({ nickName, imageUrl }: ICoupleUserProps) {
  return (
    <S.EachProfileContainer>
      <Profile width={96} height={96} path={imageUrl} isLink={false} />
      <S.NickName>{nickName}</S.NickName>
    </S.EachProfileContainer>
  );
}

function CoupleInfo({ startDate }: IStartDateProps) {
  const calculatedDDay = calculatingDDay(startDate);

  return (
    <S.CoupleInfoContainer>
      <S.DDay>{`D + ${calculatedDDay}`}</S.DDay>
      <S.StartDate>{`
      ${startDate}
      `}</S.StartDate>
    </S.CoupleInfoContainer>
  );
}
export function CoupleProfile({ me, you, startDate }: ICoupleProfileProps) {
  return (
    <S.Container>
      <EachProfile nickName={me.nickName} imageUrl={me.imageUrl} />
      <CoupleInfo startDate={startDate} />
      <EachProfile nickName={you.nickName} imageUrl={you.imageUrl} />
    </S.Container>
  );
}
