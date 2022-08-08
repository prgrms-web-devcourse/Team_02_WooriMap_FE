import { nanoid } from 'nanoid';
import { IMapMarker } from 'types';
import Image from 'next/image';
import search from 'public/image/search.svg';
import * as S from './SearchBar.styles';

interface ISearchBarProps {
  keyword: string;
  isResultVisible: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (marker: IMapMarker) => void;
  results: Array<IMapMarker>;
}

export function SearchBar({
  keyword,
  isResultVisible,
  onChange,
  onClick,
  results,
}: ISearchBarProps) {
  const resultLength = results.length;

  const isSearching = resultLength > 0 && isResultVisible;

  return (
    <S.Container>
      <S.Wrapper isSearching={isSearching}>
        <S.Input
          value={keyword}
          placeholder="장소를 검색해주세요"
          onChange={onChange}
        />
        <Image src={search} width={16} height={16} alt="search" />
      </S.Wrapper>
      {isSearching && (
        <S.SearchResultBox>
          {results.map((result: IMapMarker) => (
            <S.SearchResult key={nanoid()} onClick={() => onClick(result)}>
              {result.content}
            </S.SearchResult>
          ))}
        </S.SearchResultBox>
      )}
    </S.Container>
  );
}
