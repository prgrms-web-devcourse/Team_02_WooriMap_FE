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
      console.log('sd');
      if (!mounted) return;

      if (!user) {
        router.push('/auth/signin');
        return;
      }
      /**
       * TODO: 페이지 완성 뒤 다른 페이지로 이동 필요
       */

      if (!user.isCouple && pathname !== '/profile/invite') {
        router.push('/profile');
        return;
      }

      if (user.isCouple && pathname === '/profile/invite') {
        router.push('/');
      }
    }, [mounted, router, user]);

    if (!(mounted && user)) return null;

    return <Component {...props} />;
  };
}

export default withCoupleRoute;
