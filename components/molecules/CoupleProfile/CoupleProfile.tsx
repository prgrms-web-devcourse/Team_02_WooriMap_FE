import * as S from './CoupleProfile.styles';
import { Profile } from 'components';

interface ICoupleProfileProps {
  nickname: string;
  coupleNickname: string;
  coupleStartingDate: string;
}

function EachProfile(nickname: string) {
  return (
    <S.EachProfileContainer>
      <Profile width={128} height={128} path={null} isLink={false} />
      <S.Nickname>{nickname}</S.Nickname>
    </S.EachProfileContainer>
  );
}
export function CoupleProfile({
  nickname,
  coupleNickname,
  coupleStartingDate,
}: ICoupleProfileProps) {}
