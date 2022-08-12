import { useEffect } from 'react';
import { IToast } from 'types';
import { ToastItem } from 'components';

interface IToastProps {
  toasts: Array<IToast>;
  removeToast: ({ key }: { key: string }) => void;
}

export function Toast({ toasts, removeToast }: IToastProps) {
  useEffect(() => {
    console.log('sd');
  }, [toasts, removeToast]);

  return (
    <div>
      {toasts.map(({ key, message, status, duration }) => (
        <ToastItem
          key={key}
          toast={{ message, status, duration }}
          onRemove={() => removeToast({ key })}
        />
      ))}
    </div>
  );
}
