import { useCallback, useState, useEffect } from 'react';
import { getBounds, parseMarkers, ICoordinates, IMapMarker } from './helper';

type ReturnType = [
  IMapMarker[],
  (keyword: string) => void,
  (data: ICoordinates[]) => void,
];

function useMapSearch(map: kakao.maps.Map | null): ReturnType {
  const [services, setServices] = useState<kakao.maps.services.Places | null>(
    null,
  );
  const [markers, setMarkers] = useState<IMapMarker[]>([]);

  const setBounds = useCallback(
    (data: ICoordinates[]) => {
      const bounds = getBounds(data);
      map?.setBounds(bounds);
    },
    [map],
  );

  const getSearchResults = useCallback(
    (keyword: string) => {
      if (!services) return;

      services.keywordSearch(keyword, (data, status) => {
        if (status !== kakao.maps.services.Status.OK) return;

        const results = parseMarkers(data);
        setMarkers(results);
        setBounds(
          results.map(({ position }) => ({
            latitude: position.latitude,
            longitude: position.longitude,
          })),
        );
      });
    },
    [services, setBounds],
  );

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    setServices(ps);
  }, [map]);

  return [markers, getSearchResults, setBounds];
}

export default useMapSearch;
