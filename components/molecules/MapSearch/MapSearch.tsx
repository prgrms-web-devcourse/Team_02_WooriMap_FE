import { useState } from 'react';
import { useMapSearch } from 'hooks';
import { IMapMarker } from 'types';
import { Map, SearchBar, Marker } from 'components';
import * as S from './MapSearch.styles';

export function MapSearch() {
  const [selected, setSelected] = useState<IMapMarker>({
    content: '',
    position: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const { markers, getSearchResults, onSelectMarker } = useMapSearch(
    map,
    setSelected,
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    getSearchResults(value);
    setSelected((prev) => ({ ...prev, content: value }));
  };

  return (
    <S.Container>
      <SearchBar
        keyword={selected.content}
        onChange={onChange}
        onClick={onSelectMarker}
        results={markers}
      />
      <Map
        width="100%"
        height="100%"
        onCreate={setMap}
        center={{ lat: 37.5666805, lng: 126.9784147 }}
      >
        <Marker markers={markers} onSelectMarker={onSelectMarker} />
      </Map>
    </S.Container>
  );
}
