<<<<<<< HEAD
import { Profile } from 'components';
import { notificationIcon, logoutIcon } from 'public/image';
=======
import { Button, Profile, Notification } from 'components';
>>>>>>> fb7e800 (feat: LoggedInSection에 알림 컴포넌트 추가)
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
<<<<<<< HEAD
      <S.IconContainer>
        <S.HeaderIcon
          src={notificationIcon}
          alt="알람"
          width={40}
          height={40}
        />
        <S.HeaderIcon
          src={logoutIcon}
          alt="로그아웃 버튼"
          onClick={handleLogout}
          width={40}
          height={40}
        />
      </S.IconContainer>
=======
      <Notification />
      <Button size="small" variant="blackOutlined" onClick={handleLogout}>
        Log Out
      </Button>
>>>>>>> fb7e800 (feat: LoggedInSection에 알림 컴포넌트 추가)
      <Profile
        width={40}
        height={40}
        isLink
        path={profileImageSrc && profileImageSrc}
      />
    </S.Container>
  );
}
