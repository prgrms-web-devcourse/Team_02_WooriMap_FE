import { IMapMarker } from 'types';

// map에 들어갈거 하나 -> lat,lng 이름이 달라서 때문에 어쩔 수 없음
// 초기값 하나

export const setInitialPositionState = ({ marker }: { marker: IMapMarker }) => {
  const {
    position: { latitude: lat, longitude: lng },
  } = marker;
  const isSetted = lat && lng;

  const initialMarker = isSetted ? [{ ...marker }] : [];
  const initialMapCenter = isSetted
    ? { lat, lng }
    : { lat: 37.5666805, lng: 126.9784147 };

  return { initialMarker, initialMapCenter };
};
