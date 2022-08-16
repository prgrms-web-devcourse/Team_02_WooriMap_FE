import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';
import { NavBar } from 'components';

/**
 * NOTE: 해당 HOC를 /auth 주소에서 사용하면 무한 루프로 인해
 * 페이지가 동작하지 않으므로, 사용하지 말 것
 */
function withAuth<P>(Component: FunctionComponent<P>) {
  return function WithAuthComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;
      if (!user) {
        router.push('/auth/signin');
      }
    }, [mounted, router, user]);

    if (user) {
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

export default withAuth;
