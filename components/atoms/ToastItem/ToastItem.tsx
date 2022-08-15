import { IToast } from 'types';
import { useTimeout } from 'hooks';
import Lottie from 'react-lottie';
import Image from 'next/image';
import close from 'public/image/close.png';
import success from './check.json';
import temp from './error.json';
import * as S from './ToastItem.styles';

interface IToastProps {
  toast: Omit<IToast, 'key'>;
  onRemove: () => void;
  position: {
    top: number;
    right: number;
  };
}

function ProgressBar({
  status,
  duration,
}: {
  status: 'success' | 'fail';
  duration: number;
}) {
  return <S.ProgressBar status={status} duration={duration} />;
}

export function ToastItem({ toast, onRemove, position }: IToastProps) {
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
    <S.Container
      duration={duration}
      top={position.top}
      right={position.right}
      status={status}
    >
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
        <Image src={close} width={10} height={10} alt="delete-button" />
      </button>
      <ProgressBar status={status} duration={duration} />
    </S.Container>
  );
}
