import * as S from './SearchBar.styles';

export function SearchBar() {
  return (
    <>
      <S.Container isSearching>
        <S.Input />
      </S.Container>
      <S.SearchResultBox />
    </>
  );
}
