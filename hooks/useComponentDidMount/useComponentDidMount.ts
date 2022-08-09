import { useEffect, useState } from 'react';

function useComponentDidMount() {
  const [componentDidMount, setComponentDidMount] = useState(false);
  useEffect(() => {
    setComponentDidMount(true);
  }, []);
  return componentDidMount;
}

export default useComponentDidMount;
