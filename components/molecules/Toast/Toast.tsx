import { IToast } from 'types';
import { ToastItem } from 'components';
import * as S from './Toast.styles';

interface IToastProps {
  toasts: Array<IToast>;
  removeToast: ({ key }: { key: string }) => void;
  top: number;
  right: number;
}

export function Toast({ toasts, removeToast, top, right }: IToastProps) {
  return (
    <S.Container top={top} right={right}>
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
