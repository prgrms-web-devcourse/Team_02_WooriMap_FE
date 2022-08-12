import Image from 'next/image';
import Link from 'next/link';
import { LoggedInSection } from 'components';
import mainLogo from 'public/image/main-logo.svg';
import userState from 'core';
import { useRecoilValueAfterMount } from 'hooks';
import * as S from './NavBar.styles';

export function NavBar() {
  const user = useRecoilValueAfterMount(userState, null);

  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/">
          <Image
            src={mainLogo}
            style={{ cursor: 'pointer' }}
            alt="main-logo"
            width={240}
            height={40}
          />
        </Link>
        <LoggedInSection
          isSignedIn={user !== null}
          profileImageSrc={user && user.imageUrl}
        />
      </S.Wrapper>
    </S.Container>
  );
}
