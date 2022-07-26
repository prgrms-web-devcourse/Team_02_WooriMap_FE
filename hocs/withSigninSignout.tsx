import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

/**
 * NOTE: 해당 HOC는 auth/signin, auth/signup 등
 * 로그인 하지 않은 페이지에서만 사용할 것
 */
function withSigninSignout<P>(Component: FunctionComponent<P>) {
  return function WithAuthComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;

      if (user) {
        if (user.isCouple) {
          router.push('/');
        } else {
          router.push('/profile');
        }
      }
    }, [mounted, router, user]);

    if (!(mounted && !user)) return null;
    return <Component {...props} />;
  };
}

export default withSigninSignout;
