import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

/**
 * NOTE: 해당 HOC는 auth/signin, auth/signup 등
 * 로그인 하지 않은 페이지에서만 사용할 것
 */
function witihSigninSignout<P>(Component: FunctionComponent<P>) {
  return function WithAuthComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;
      if (user && !user.isCouple) {
        router.push('/profile');
        return;
      }
      router.push('/');
    }, [mounted, router, user]);

    if (!(mounted && !user)) return null;
    return <Component {...props} />;
  };
}

export default witihSigninSignout;
