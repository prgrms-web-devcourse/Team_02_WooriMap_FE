import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

function withSignInSignOut<P>(Component: FunctionComponent<P>) {
  return function WithCoupleComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;

      if (user) {
        if (user.isCouple) router.replace('/');
        else router.replace('/profile');
      }
    }, [mounted, router, user]);

    if (!mounted) return null;

    return <Component {...props} />;
  };
}

export default withSignInSignOut;
