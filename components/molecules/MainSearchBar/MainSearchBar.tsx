import Image from 'next/image';
import searchIcon from '../../../public/image/Search.png';
import * as S from './MainSearchBar.styles';

interface IIsTag {
  isTag: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TagCheckbox({ isTag }: IIsTag) {
  return (
    <S.TagValidation>
      <input type="checkbox" />
      <div>태그 검색하기</div>
    </S.TagValidation>
  );
}

function SearchBar() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('searchbar를 클릭하셨군요!');
  };

  return (
    <S.SearchBarForm onSubmit={onSubmit}>
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
