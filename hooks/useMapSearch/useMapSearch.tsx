import { useCallback, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { MapMarker } from 'react-kakao-maps-sdk';
import { ICoordinates, IMapMarker } from 'types';
import { getBounds, parseMarkers } from './helper';

type ReturnType = [
  IMapMarker[],
  (keyword: string) => void,
  () => JSX.Element[],
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
        if (status !== kakao.maps.services.Status.OK) {
          setMarkers([]);
          return;
        }

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

  const drawMarkers = () => {
    return markers.map(({ position, content }: IMapMarker) => {
      const { latitude: lat, longitude: lng } = position;

      const image = {
        src: 'https://i.imgur.com/iwOEvRP.png',
        size: {
          width: 24,
          height: 35,
        },
      };

      return (
        <MapMarker
          key={nanoid()}
          position={{ lat, lng }}
          image={image}
          title={content}
        />
      );
    });
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    setServices(ps);
  }, [map]);

  return [markers, getSearchResults, drawMarkers, setBounds];
}

export default useMapSearch;
