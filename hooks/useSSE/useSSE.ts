import LocalStorage from 'utils/storage';
import { useEffect, useMemo, useState } from 'react';

function useSSE() {
  const [source, setSource] = useState<EventSource | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/subscribe?token=${LocalStorage.getItem('accessToken', '')}`,
    );

    eventSource.addEventListener('error', () => {
      if (eventSource.readyState === EventSource.CLOSED) {
        eventSource.close();
      }
    });

    setSource(eventSource);

    return () => {
      eventSource.close();
    };
  }, []);

  return useMemo(() => source, [source]);
}

export default useSSE;
