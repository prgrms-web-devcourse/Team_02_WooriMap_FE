import { useState } from 'react';
import { useMapSearch } from 'hooks';
import { IMapMarker, ISetValueState } from 'types';
import { Map, SearchBar, MultiMarkerDrawer } from 'components';
import * as S from './SearchableMap.styles';

interface ISearchableMapProps {
  position: {
    latitude: number;
    longitude: number;
  };
  onSetFormState: ({ name, value }: ISetValueState) => void;
}

export function SearchableMap({
  position,
  onSetFormState,
}: ISearchableMapProps) {
  const [selected, setSelected] = useState<IMapMarker>({
    content: '',
    position,
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

  const onClickMarker = () => (marker: IMapMarker) =>
    onSelectMarker({ marker, onSetFormState });

  return (
    <S.Container>
      <SearchBar
        keyword={selected.content}
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
