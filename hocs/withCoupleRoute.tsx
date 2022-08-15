import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

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

    if (user?.isCouple) return <Component {...props} />;
    return null;
  };
}

export default withCoupleRoute;
