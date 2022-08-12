import { IToast } from 'types';
import { useTimeout } from 'hooks';
import Lottie from 'react-lottie';
import success from './96085-green-check.json';
import * as S from './ToastItem.styles';

interface IToastProps {
  toast: Omit<IToast, 'key'>;
  onRemove: () => void;
}

export function ToastItem({ toast, onRemove }: IToastProps) {
  const { message, status, duration } = toast;

  useTimeout({ fn: () => onRemove(), delay: duration });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.Container>
      <Lottie options={defaultOptions} width={50} height={50} />
      <div>{message}</div>
      <button className="toast-item-close" onClick={onRemove} type="button">
        <span className="sr-only">닫기</span>
      </button>
    </S.Container>
  );
}
