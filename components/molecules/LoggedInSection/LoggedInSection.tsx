import { Profile } from 'components';
import { notificationIcon, logoutIcon } from 'public/image';
import * as S from './LoggedInSection.styles';

interface ILoggedInSectionProps {
  profileImageSrc?: string | null;
  handleLogout: () => void;
}

export function LoggedInSection({
  profileImageSrc,
  handleLogout,
}: ILoggedInSectionProps) {
  return (
    <S.Container>
      <S.IconContainer>
        <S.HeaderIcon src={notificationIcon} alt="알람" />
        <S.HeaderIcon
          src={logoutIcon}
          alt="로그아웃 버튼"
          onClick={handleLogout}
        />
      </S.IconContainer>
      <Profile
        width={48}
        height={48}
        isLink
        path={profileImageSrc && profileImageSrc}
      />
    </S.Container>
  );
}
