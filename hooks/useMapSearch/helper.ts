import { ICoordinates, IMapMarker } from 'types';

export function getBounds(data: ICoordinates[]) {
  const bounds = new kakao.maps.LatLngBounds();
  data.forEach(({ latitude, longitude }) => {
    bounds.extend(new kakao.maps.LatLng(latitude, longitude));
  });
  return bounds;
}

export function parseMarkers(data: kakao.maps.services.PlacesSearchResult) {
  return data.map<IMapMarker>(({ y, x, place_name }) => ({
    position: { latitude: Number(y), longitude: Number(x) },
    content: place_name,
  }));
}
