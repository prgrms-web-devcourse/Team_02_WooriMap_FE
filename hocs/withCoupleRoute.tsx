import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

function withCoupleRoute<P>(Component: FunctionComponent<P>) {
  return function WithCoupleComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;

      if (!user) {
        router.push('/auth/signin');
        return;
      }
      /**
       * TODO: 페이지 완성 뒤 다른 페이지로 이동 필요
       */
      if (!user.isCouple) {
        router.push('/auth/signup');
      }
    }, [mounted, router, user]);

    if (!(mounted && user)) return null;
    if (!user.isCouple) return null;
    return <Component {...props} />;
  };
}

export default withCoupleRoute;
