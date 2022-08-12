import { Button, Profile } from 'components';
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
      <Button size="small" variant="blackOutlined" onClick={handleLogout}>
        Log Out
      </Button>
      <Profile path={profileImageSrc} width={48} height={48} isLink />
    </S.Container>
  );
}
