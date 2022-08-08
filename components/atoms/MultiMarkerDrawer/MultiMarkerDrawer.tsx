import { nanoid } from 'nanoid';
import { MapMarker } from 'react-kakao-maps-sdk';
import { IMapMarker } from 'types';

interface IMultiMarkerDrawerProps {
  markers: Array<IMapMarker>;
  onClick: (marker: IMapMarker) => void;
}

export function MultiMarkerDrawer({
  markers,
  onClick,
}: IMultiMarkerDrawerProps) {
  return (
    <>
      {markers.map((marker: IMapMarker) => {
        const { position, content } = marker;
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
            onClick={() => onClick(marker)}
          />
        );
      })}
    </>
  );
}
