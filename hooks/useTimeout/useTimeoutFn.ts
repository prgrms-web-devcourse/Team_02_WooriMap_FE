import { useRef, useCallback, useEffect } from 'react';

interface IUseTimeoutFnProps {
  fn: () => void;
  delay: number;
}

export function useTimeoutFn({ fn, delay }: IUseTimeoutFnProps) {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return { run, clear };
}
