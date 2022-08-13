import Image from 'next/image';
import { Profile, Notification, IconWrapper } from 'components';
import { logoutIcon } from 'public/image';
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
        <Notification />
        <IconWrapper>
          <Image
            src={logoutIcon}
            alt="로그아웃 버튼"
            onClick={handleLogout}
            width={40}
            height={40}
          />
        </IconWrapper>
      </S.IconContainer>
      <Profile
        width={40}
        height={40}
        isLink
        path={profileImageSrc && profileImageSrc}
      />
    </S.Container>
  );
}
