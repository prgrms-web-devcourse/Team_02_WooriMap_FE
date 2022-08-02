import * as S from './MainSearchBar.styles';
import searchIcon from '../../../public/image/Search.png';

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
      <button>
        <img src={searchIcon} />
      </button>
    </S.SearchBarForm>
  );
}

export function MainSearchBar() {
  return (
    <S.MainSearchBarContainer>
      <TagCheckbox isTag={true} />
      <SearchBar />
      {/* 훗날 taglist가 들어갈 자리 */}
      <div id="taglist"></div>
    </S.MainSearchBarContainer>
  );
}
