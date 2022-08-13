import { IToast } from 'types';
import { useTimeout } from 'hooks';

interface IToastProps {
  toast: Omit<IToast, 'key'>;
  onRemove: () => void;
}

export function ToastItem({ toast, onRemove }: IToastProps) {
  const { message, status, duration } = toast;

  useTimeout({ fn: () => onRemove(), delay: duration });

  return (
    <div className={`toast-item ${status}`}>
      <div className="toast-item-message">{message}</div>
      <button className="toast-item-close" onClick={onRemove} type="button">
        <span className="sr-only">닫기</span>
      </button>
    </div>
  );
}
