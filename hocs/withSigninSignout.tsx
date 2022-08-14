import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

function witihSigninSignout<P>(Component: FunctionComponent<P>) {
  return function WithAuthComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;
      if (user && user.isCouple) {
        router.push('/');
        return;
      }
      router.push('/profile');
    }, [mounted, router, user]);

    if (!(mounted && !user)) return null;
    return <Component {...props} />;
  };
}

export default witihSigninSignout;
