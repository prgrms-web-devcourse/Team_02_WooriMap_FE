import Link from 'next/link';
import Image from 'next/image';
import { LoggedInSection } from 'components';
import { headerLogo } from 'public/image';
import userState from 'core';
import { useAxiosInstance, useRecoilValueAfterMount } from 'hooks';
import { useSetRecoilState } from 'recoil';
import * as S from './NavBar.styles';

export function NavBar() {
  const user = useRecoilValueAfterMount(userState, null);
  const setUser = useSetRecoilState(userState);
  const instance = useAxiosInstance();

  const logout = async () => {
    try {
      await instance.post('/auth/signout');
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <Link href="/">
        <S.HeaderLogo>
          <Image src={headerLogo} alt="메인로고" width={58} height={34} />
        </S.HeaderLogo>
      </Link>
      <LoggedInSection
        profileImageSrc={user && user.imageUrl}
        handleLogout={handleLogout}
      />
    </S.Container>
  );
}
