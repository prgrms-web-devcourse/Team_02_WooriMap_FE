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

  return (
    <S.Container>
      <S.Wrapper isSearching={resultLength > 0 && isResultVisible}>
        <S.Input value={keyword} onChange={onChange} />
        <Image src={search} width={16} height={16} alt="search" />
      </S.Wrapper>
      {resultLength > 0 && isResultVisible && (
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
