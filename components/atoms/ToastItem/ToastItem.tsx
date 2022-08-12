import { IToast } from 'types';
import { useTimeout } from 'hooks';
import Lottie from 'react-lottie';
import Image from 'next/image';
import success from './check.json';
import fail from './fail.json';
import error from './error.json';
import close from 'public/image/close.png';
import temp from './error.json';
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
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.Container status={status}>
      {status === 'success' && (
        <Lottie
          options={{ ...defaultOptions, animationData: success }}
          width={50}
          height={50}
        />
      )}
      {status === 'fail' && (
        <Lottie
          options={{ ...defaultOptions, animationData: temp }}
          width={50}
          height={50}
        />
      )}

      <p>{message}</p>
      <button className="toast-item-close" onClick={onRemove} type="button">
        <Image src={close} width={10} height={10} />
      </button>
    </S.Container>
  );
}
