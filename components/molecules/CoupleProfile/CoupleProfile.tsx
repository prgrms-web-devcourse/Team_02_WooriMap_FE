import { ICoupleUserProps, IStartDateProps, ICoupleProfileProps } from 'types';
import { Profile } from 'components';
import { calculatingDDay } from 'utils';
import * as S from './CoupleProfile.styles';

function EachProfile({ nickName, profileImagePath }: ICoupleUserProps) {
  return (
    <S.EachProfileContainer>
      <Profile
        width={128}
        height={128}
        path={profileImagePath}
        isLink={false}
      />
      <S.Nickname>{nickName}</S.Nickname>
    </S.EachProfileContainer>
  );
}

function CoupleInfo({ startDate }: IStartDateProps) {
  const calculatedDDay = calculatingDDay(startDate);

  return (
    <S.CoupleInfoContainer>
      <S.DDay>{`D + ${calculatedDDay}`}</S.DDay>
      <S.StartingDate>{`
      ${startDate}
      `}</S.StartingDate>
    </S.CoupleInfoContainer>
  );
}
export function CoupleProfile({ me, you, startDate }: ICoupleProfileProps) {
  return (
    <S.Container>
      <EachProfile
        nickName={me.nickName}
        profileImagePath={me.profileImagePath}
      />
      <CoupleInfo startDate={startDate} />
      <EachProfile
        nickName={you.nickName}
        profileImagePath={you.profileImagePath}
      />
    </S.Container>
  );
}
