import Link from 'next/link';
import { LoggedInSection } from 'components';
import { headerLogo } from 'public/image';
import userState from 'core';
import { useAxiosInstance, useRecoilValueAfterMount } from 'hooks';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import * as S from './NavBar.styles';

export function NavBar() {
  const user = useRecoilValueAfterMount(userState, null);
  const setUser = useSetRecoilState(userState);
  const instance = useAxiosInstance();
  const router = useRouter();

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
      router.push('auth/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <Link href="/" passHref>
        <S.HeaderLogo src={headerLogo} alt="메인로고" />
      </Link>
      <LoggedInSection
        profileImageSrc={user && user.imageUrl}
        handleLogout={handleLogout}
      />
    </S.Container>
  );
}
