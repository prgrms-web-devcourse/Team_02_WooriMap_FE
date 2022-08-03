import Image from 'next/image';
import search from 'public/image/search.svg';
import * as S from './SearchBar.styles';

export function SearchBar() {
  return (
    <>
      <S.Container isSearching>
        <S.Input />
        <Image src={search} width={16} height={16} alt="search" />
      </S.Container>
      <S.SearchResultBox />
    </>
  );
}
