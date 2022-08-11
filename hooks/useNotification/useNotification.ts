import { useSSE } from 'hooks/useSSE';
import { useEffect } from 'react';

function useNotification() {
  const source = useSSE();

  useEffect(() => {
    if (!source) return;

    source.addEventListener('open', (e) => {
      console.log('opened!!', e);
    });

    source.addEventListener('test', (e) => {
      console.log('test:', e);
    });

    source.addEventListener('message', (e) => {
      console.log('message');
      console.log(e);
    });

    source.addEventListener('error', () => {
      console.log('error');
    });
  }, [source]);
}

export default useNotification;
