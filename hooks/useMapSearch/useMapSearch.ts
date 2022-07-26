import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { ICoordinates, IMapMarker, HandleChangeTypes } from 'types';
import { getBounds, parseMarkers } from './helper';

interface IReturnType {
  markers: IMapMarker[];
  getSearchResults: (keyword: string) => void;
  setBounds: (data: ICoordinates[]) => void;
  onSelectMarker: ({
    marker,
    handleChange,
    setSelected,
  }: {
    marker: IMapMarker;
    handleChange: HandleChangeTypes;
    setSelected: Dispatch<SetStateAction<IMapMarker>>;
  }) => void;
}

interface IMapSearchProps {
  initialMarker: IMapMarker[];
  map: kakao.maps.Map | null;
}

function useMapSearch({ initialMarker, map }: IMapSearchProps): IReturnType {
  const [services, setServices] = useState<kakao.maps.services.Places | null>(
    null,
  );
  const [markers, setMarkers] = useState<IMapMarker[]>(initialMarker);

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
      if (keyword === '') {
        setMarkers([]);
        return;
      }

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

  const onSelectMarker = ({
    marker,
    handleChange,
    setSelected,
  }: {
    marker: IMapMarker;
    handleChange: HandleChangeTypes;
    setSelected: Dispatch<SetStateAction<IMapMarker>>;
  }) => {
    const { position } = marker;
    const { latitude: lat, longitude: lng } = position;
    const latlng = new kakao.maps.LatLng(lat, lng);

    setSelected(() => ({ ...marker }));
    handleChange({
      name: 'position',
      value: { latitude: lat, longitude: lng },
    });

    map?.setCenter(latlng);
    setMarkers(() => [marker]);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    setMarkers(initialMarker);
    setServices(ps);
  }, [map]);

  return { markers, getSearchResults, setBounds, onSelectMarker };
}

export default useMapSearch;
