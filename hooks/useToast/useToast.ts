import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';

export function useToast() {
  const portalId = 'toast-portal';
  const portalElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (portalElement.current) {
      return;
    }

    const toastDOM = document.getElementById(portalId);

    if (toastDOM) portalElement.current = toastDOM as HTMLDivElement;
  }, []);

  // TODO: Toast 메니져에 있는 함수를 반환 받아야 한다.
}
