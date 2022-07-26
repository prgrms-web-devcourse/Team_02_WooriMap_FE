import Image from 'next/image';
import Link from 'next/link';
import { LoggedInSection } from 'components';
import { headerLogo } from 'public/image';
import userState from 'core';
import { useAxiosInstance, useRecoilValueAfterMount } from 'hooks';
import { useSetRecoilState } from 'recoil';
import { withLoading } from 'hocs';
import * as S from './NavBar.styles';

function NavBar() {
  const user = useRecoilValueAfterMount(userState, null);
  const setUser = useSetRecoilState(userState);
  const instance = useAxiosInstance();

  const logout = async () => {
    try {
      await instance.post('/auth/signout');
    } catch (error) {
      // do nothing
    } finally {
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      // do nothing
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

export default withLoading(NavBar);
