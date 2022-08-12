import { Profile } from 'components';
import { notificationIcon, logoutIcon } from 'public/image';
import * as S from './LoggedInSection.styles';

export function LoggedInSection() {
  const onLogout = () => console.log('logout');

  return (
    <S.Container>
      <S.IconContainer>
        <S.HeaderIcon src={notificationIcon} alt="알람" />
        <S.HeaderIcon src={logoutIcon} alt="로그아웃 버튼" onClick={onLogout} />
      </S.IconContainer>
      <Profile width={48} height={48} isLink />
    </S.Container>
  );
}
