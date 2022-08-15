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
            image={{
              src: 'https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHzNaV%2FbtrJFPHq266%2FYSW64UbOvUPehLH6Kjo8bk%2Fimg.png',
              size: {
                width: 40,
                height: 50,
              },
            }}
            title={content}
            onClick={() => onClick(marker)}
          />
        );
      })}
    </>
  );
}
