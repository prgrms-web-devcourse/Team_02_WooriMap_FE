import { useEffect, useState, useMemo } from 'react';

function useComponentDidMount() {
  const [componentDidMount, setComponentDidMount] = useState(false);
  useEffect(() => {
    setComponentDidMount(true);
  }, []);
  return useMemo(() => componentDidMount, [componentDidMount]);
}

export default useComponentDidMount;
