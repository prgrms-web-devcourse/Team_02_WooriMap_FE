import { useComponentDidMount } from '@hooks/useComponentDidMount';
import { useRecoilValue, RecoilValue } from 'recoil';

function useRecoilValueAfterMount<T>(
  recoilValue: RecoilValue<T>,
  valueBeforeMount: T,
) {
  const didMount = useComponentDidMount();
  const realValue = useRecoilValue(recoilValue);
  return didMount ? realValue : valueBeforeMount;
}

export default useRecoilValueAfterMount;
