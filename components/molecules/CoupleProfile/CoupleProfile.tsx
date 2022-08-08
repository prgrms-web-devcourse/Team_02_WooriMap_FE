import { Profile } from 'components';
import { calculatingDDay } from 'utils';
import * as S from './CoupleProfile.styles';

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
  const calculatedDDay = calculatingDDay(coupleStartingDate);

  return (
    <S.CoupleInfoContainer>
      <S.DDay>{`D + ${calculatedDDay}`}</S.DDay>
      <S.StartingDate>{`
      ${coupleStartingDate}
      `}</S.StartingDate>
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
