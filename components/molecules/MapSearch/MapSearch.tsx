import { useState } from 'react';
import { useMapSearch } from 'hooks';
import { Map, SearchBar } from 'components';
import * as S from './MapSearch.styles';

export function MapSearch() {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [markers, getSearchResults, drawMarkers, , onSelectMarker] =
    useMapSearch(map);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    getSearchResults(value);
  };

  return (
    <S.Container>
      <SearchBar onChange={onChange} results={markers} />
      <Map
        width={700}
        height={700}
        onCreate={setMap}
        center={{ lat: 37.5666805, lng: 126.9784147 }}
      >
        {drawMarkers()}
      </Map>
    </S.Container>
  );
}
