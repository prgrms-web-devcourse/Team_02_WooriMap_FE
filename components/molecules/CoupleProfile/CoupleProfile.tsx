import * as S from './CoupleProfile.styles';
import { Profile } from 'components';

interface ICoupleProfileProps {
  userName: string;
}

export function CoupleProfile({ userName }: ICoupleProfileProps) {
  return (
    <S.Container>
      <Profile width={50} height={50} path={null} isLink={false} />
      <S.UserName>{userName}</S.UserName>
    </S.Container>
  );
}
