import { IToast } from 'types';
import { ToastItem } from 'components';

interface IToastProps {
  toasts: Array<IToast>;
  removeToast: ({ key }: { key: string }) => void;
  top: number;
  right: number;
}

export function Toast({ toasts, removeToast, top, right }: IToastProps) {
  return (
    <>
      {toasts.map(({ key, message, status, duration }) => (
        <ToastItem
          key={key}
          toast={{ message, status, duration }}
          onRemove={() => removeToast({ key })}
          position={{ top, right }}
        />
      ))}
    </>
  );
}
