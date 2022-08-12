import { useEffect } from 'react';
import { useTimeoutFn } from './useTimeoutFn';

interface IUseTimeoutProps {
  fn: () => void;
  delay: number;
}

export function useTimeout({ fn, delay }: IUseTimeoutProps) {
  const { run, clear } = useTimeoutFn({ fn, delay });

  useEffect(() => {
    run();
    return clear;
  }, [clear, run]);

  return clear;
}
