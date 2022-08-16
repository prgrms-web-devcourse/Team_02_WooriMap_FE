import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';
import { NavBar } from 'components';

function withCoupleRoute<P>(Component: FunctionComponent<P>) {
  return function WithCoupleComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {
      if (!mounted) return;

      if (!user) {
        router.push('/auth/signin');
        return;
      }

      if (!user.isCouple && pathname !== '/profile/invite') {
        router.push('/profile');
        return;
      }

      if (user.isCouple && pathname === '/profile/invite') {
        router.push('/');
      }
    }, [mounted, pathname, router, user]);

    // 커플이 아니고 path가 invite일 때
    if (!user?.isCouple && pathname === '/profile/invite') {
      return <Component {...props} />;
    }

    // 커플이고 path가 invite가 아닐때, ( path 체크를 안해주면 중간에 들어갔다 나옵니다.. )
    if (user?.isCouple && pathname !== '/profile/invite') {
      return (
        <>
          <NavBar />
          <Component {...props} />
        </>
      );
    }

    return null;
  };
}

export default withCoupleRoute;
