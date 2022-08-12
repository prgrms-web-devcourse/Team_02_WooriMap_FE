import { Button, Profile } from 'components';
import Link from 'next/link';
import * as S from './LoggedInSection.styles';

interface ILoggedInSectionProps {
  isSignedIn: boolean;
  profileImageSrc?: string | null;
}

export function LoggedInSection({
  isSignedIn,
  profileImageSrc,
}: ILoggedInSectionProps) {
  return (
    <S.Container>
      {isSignedIn ? (
        <>
          <Button size="small" variant="blackOutlined">
            Log Out
          </Button>
          <Profile path={profileImageSrc} width={48} height={48} isLink />
        </>
      ) : (
        <Link href="/auth/signin">
          <Button size="small" variant="blackOutlined">
            Log In
          </Button>
        </Link>
      )}
    </S.Container>
  );
}
