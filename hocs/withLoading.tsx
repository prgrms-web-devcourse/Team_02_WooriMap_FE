import { FunctionComponent } from 'react';
import { useComponentDidMount } from 'hooks';

function withLoading<P>(Component: FunctionComponent<P>) {
  return function WithLoadingComponent(props: P) {
    const mounted = useComponentDidMount();
    if (!mounted) return null;
    return <Component {...props} />;
  };
}

export default withLoading;
