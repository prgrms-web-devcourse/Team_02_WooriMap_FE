import { useState, useEffect } from 'react';
import getCurrentCoordinates from 'utils/geolocation';

function useGeolocation() {
  const [coords, setCoords] = useState({
    latitude: 37.5666805,
    longitude: 126.9784147,
  });

  useEffect(() => {
    const onSuccess: PositionCallback = (position) => {
      setCoords((prev) => ({
        ...prev,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    };

    getCurrentCoordinates(onSuccess);
  }, []);

  return { coords };
}

export default useGeolocation;
