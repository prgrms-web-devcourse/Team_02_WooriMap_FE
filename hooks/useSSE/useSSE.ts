import { useEffect, useMemo, useState } from 'react';

function useSSE(url: string) {
  const [source, setSource] = useState<EventSource | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.addEventListener('error', () => {
      if (eventSource.readyState === EventSource.CLOSED) {
        eventSource.close();
      }
    });

    setSource(eventSource);

    return () => {
      eventSource.close();
    };
  }, [url]);

  return useMemo(() => source, [source]);
}

export default useSSE;
