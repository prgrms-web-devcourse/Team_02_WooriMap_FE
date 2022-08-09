import { useMemo } from 'react';
import { useRecoilValue, RecoilValue } from 'recoil';
import { useComponentDidMount } from 'hooks/useComponentDidMount';

function useRecoilValueAfterMount<T>(
  recoilValue: RecoilValue<T>,
  valueBeforeMount: T,
) {
  const didMount = useComponentDidMount();
  const realValue = useRecoilValue(recoilValue);
  return useMemo(
    () => (didMount ? realValue : valueBeforeMount),
    [didMount, realValue, valueBeforeMount],
  );
}

export default useRecoilValueAfterMount;
