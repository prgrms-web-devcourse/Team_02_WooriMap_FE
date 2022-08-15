import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { nanoid } from 'nanoid';
import { Toast } from 'components';
import { IToast } from 'types';

interface IToastContext {
  toasts: Array<IToast>;
  removeToast: ({ key }: { key: string }) => void;
  createToast: ({ status, message, duration }: Omit<IToast, 'key'>) => void;
}

export const ToastContext = createContext<IToastContext>({} as IToastContext);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const portalId = 'toast-portal';

  const portalElement = useRef<HTMLDivElement | null>(null);
  const [toasts, setToasts] = useState<Array<IToast>>([]);
  const [root, setRoot] = useState<ReactDOMClient.Root | null>(null);

  const createToast = useMemo(
    () =>
      ({ status, message, duration }: Omit<IToast, 'key'>) => {
        const key = nanoid();
        setToasts((prevToasts) => [
          ...prevToasts,
          { key, status, message, duration },
        ]);
      },
    [],
  );

  const removeToast = useMemo(
    () =>
      ({ key }: { key: string }) => {
        setToasts((prev) => prev.filter((toast) => toast.key !== key));
      },
    [],
  );

  useEffect(() => {
    if (portalElement.current) {
      root!.render(
        React.createElement(Toast, {
          toasts,
          removeToast,
        }),
      );

      return;
    }

    const toastDOM = document.getElementById(portalId);

    portalElement.current = toastDOM as HTMLDivElement;

    setRoot(ReactDOMClient.createRoot(portalElement.current));
  }, [toasts]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ToastContext.Provider value={{ createToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}
