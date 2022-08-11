import { useRef, useCallback, useEffect } from 'react';

const events = ['mousedown', 'touchstart'] as const;

const useClickAway = <T extends HTMLElement>(
  handler: (e: MouseEvent | TouchEvent) => void,
) => {
  const ref = useRef<T | null>(null);

  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const { current } = ref;
      if (!current) return;
      if (!current.contains(e.target as unknown as HTMLElement)) handler(e);
    },
    [handler],
  );

  useEffect(() => {
    events.forEach((event) => document.addEventListener(event, onClick));
    return () =>
      events.forEach((event) => document.removeEventListener(event, onClick));
  }, [onClick]);

  return ref;
};

export default useClickAway;
