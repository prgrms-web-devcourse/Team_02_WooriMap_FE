import { useState, useEffect } from 'react';

function useGeolocation() {
  const [coords, setCoords] = useState({
    latitude: 37.5666805,
    longitude: 126.9784147,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    const onSuccess: PositionCallback = (position) => {
      setCoords((prev) => ({
        ...prev,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    };

    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return { coords };
}

export default useGeolocation;
