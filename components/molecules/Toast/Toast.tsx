import { IToast } from 'types';
import { ToastItem } from 'components';
import * as S from './Toast.style';

interface IToastProps {
  toasts: Array<IToast>;
  removeToast: ({ key }: { key: string }) => void;
}

export function Toast({ toasts, removeToast }: IToastProps) {
  return (
    <S.Container>
      {toasts.map(({ key, message, status, duration }) => (
        <ToastItem
          key={key}
          toast={{ message, status, duration }}
          onRemove={() => removeToast({ key })}
        />
      ))}
    </S.Container>
  );
}
