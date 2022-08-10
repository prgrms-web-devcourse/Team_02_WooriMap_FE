import { useMemo } from 'react';
import { useRecoilValue, RecoilValue } from 'recoil';
import { useComponentDidMount } from 'hooks/useComponentDidMount';

/**
 * ANCHOR: effects hook을 걸어둔 RecoilValue를 클라이언트 렌더링으로
 * 값에 접근할 때 사용합니다.
 */
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
