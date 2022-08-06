import { useState } from 'react';
import { useMapSearch } from 'hooks';
import { IMapMarker, THandleChange } from 'types';
import { Map, SearchBar, MultiMarkerDrawer } from 'components';
import * as S from './SearchableMap.styles';

interface ISearchableMapProps {
  position: {
    latitude: number;
    longitude: number;
  };
  handleChange: THandleChange;
}

export function SearchableMap({ position, handleChange }: ISearchableMapProps) {
  const [selected, setSelected] = useState<IMapMarker>({
    content: '',
    position,
  });
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const { markers, getSearchResults, onSelectMarker } = useMapSearch(
    map,
    setSelected,
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    getSearchResults(value);
    setSelected((prev) => ({ ...prev, content: value }));
    setIsResultVisible(() => true);
  };

  const onClickMarker = () => (marker: IMapMarker) => {
    onSelectMarker({ marker, handleChange });
    setIsResultVisible(() => false);
  };

  return (
    <S.Container>
      <SearchBar
        keyword={selected.content}
        isResultVisible={isResultVisible}
        onChange={onChange}
        onClick={onClickMarker()}
        results={markers}
      />
      <Map
        width="100%"
        height="100%"
        onCreate={setMap}
        center={{ lat: 37.5666805, lng: 126.9784147 }}
      >
        <MultiMarkerDrawer markers={markers} onClick={onClickMarker()} />
      </Map>
    </S.Container>
  );
}
