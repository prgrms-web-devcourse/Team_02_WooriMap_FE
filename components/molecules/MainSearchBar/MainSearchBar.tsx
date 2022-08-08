import Image from 'next/image';
import searchIcon from '../../../public/image/Search.png';
import * as S from './MainSearchBar.styles';

interface IIsTag {
  isTag: boolean;
}

function TagCheckbox({ isTag }: IIsTag) {
  return (
    <S.TagValidation>
      <input type="checkbox" />
      <div>태그 검색하기</div>
    </S.TagValidation>
  );
}

function SearchBar() {
  return (
    <S.SearchBarForm>
      <input type="text" />
      <button type="button">
        <Image src={searchIcon} alt="search icon" />
      </button>
    </S.SearchBarForm>
  );
}

export function MainSearchBar() {
  return (
    <S.MainSearchBarContainer>
      <TagCheckbox isTag />
      <SearchBar />
      {/* 훗날 taglist가 들어갈 자리 */}
      <div id="taglist" />
    </S.MainSearchBarContainer>
  );
}
