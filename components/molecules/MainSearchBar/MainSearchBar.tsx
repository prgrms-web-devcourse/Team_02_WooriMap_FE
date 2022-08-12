import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  ITag as ITagWithoutId,
  IPostFilterProps,
  IMainSearchBarProps,
} from 'types';
import { TagList } from 'components';
import searchIcon from '../../../public/image/Search.png';
import * as S from './MainSearchBar.styles';

interface ITag extends ITagWithoutId {
  id: number;
}

interface ITagSearchBarProps {
  addTagList: (tag: ITag) => void;
  wholeTagList: ITag[];
  onClick: () => void;
}

interface IFilteredTagListProps {
  inputValue: string;
  wholeTagList: ITag[];
  onFilteredTagClick: ({ id, name, color }: ITag) => void;
}

function TagCheckbox({
  onCheckboxClick,
  isChecked,
}: {
  onCheckboxClick: () => void;
  isChecked: boolean;
}) {
  return (
    <S.TagValidation>
      <input type="checkbox" onClick={onCheckboxClick} checked={isChecked} />
      <div>태그 검색하기</div>
    </S.TagValidation>
  );
}

function FilteredTagList({
  inputValue,
  wholeTagList,
  onFilteredTagClick,
}: IFilteredTagListProps) {
  if (inputValue !== '') {
    return (
      <S.FilteredTagList>
        {wholeTagList
          .filter(({ name }) => name.includes(inputValue))
          .map(({ id, name, color }) => (
            <S.FilteredTag
              key={id}
              color={color}
              onClick={() => {
                onFilteredTagClick({ id, name, color });
              }}
            >
              {name}
            </S.FilteredTag>
          ))}
      </S.FilteredTagList>
    );
  }
  return (
    <S.FilteredTagList>
      {wholeTagList.map(({ id, name, color }) => (
        <S.FilteredTag
          key={id}
          color={color}
          onClick={() => {
            onFilteredTagClick({ id, name, color });
          }}
        >
          {name}
        </S.FilteredTag>
      ))}
    </S.FilteredTagList>
  );
}

function TagSearchBar({
  addTagList,
  wholeTagList,
  onClick,
}: ITagSearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTagList = (tag: ITag) => {
    addTagList(tag);
    setInputValue('');
    if (input.current) {
      input.current.value = '';
    }
  };
  const onFilteredTagClick = ({ id, name, color }: ITag) => {
    handleTagList({ id, name, color });
    onClick();
  };

  return (
    <S.TagSearchBarContainer>
      <S.SearchBarForm onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="tagSearch"
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
          ref={input}
        />
        <button type="button">
          <Image src={searchIcon} alt="search icon" />
        </button>
      </S.SearchBarForm>
      <FilteredTagList
        inputValue={inputValue}
        wholeTagList={wholeTagList}
        onFilteredTagClick={onFilteredTagClick}
      />
    </S.TagSearchBarContainer>
  );
}

function TitleSearchBar({
  handleKeyWord,
}: {
  handleKeyWord: (keyWord: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 이 부분에서 도저히 any를 쓰지 않고 어떻게 해야할 지 잘 모르겠습니다 ㅜㅠ
    const { target }: { target: any } = e;
    handleKeyWord(target[0].value);
  };
  return (
    <S.SearchBarForm onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="TitleSearch" ref={input} />
      <button type="button">
        <Image src={searchIcon} alt="search icon" />
      </button>
    </S.SearchBarForm>
  );
}

export function MainSearchBar({
  handlePostFilter,
  wholeTagList,
}: IMainSearchBarProps) {
  const [isTagSearch, setIsTagSearch] = useState(false);
  const [tagList, setTagList] = useState<ITag[]>([]);
  const [keyWord, setKeyWord] = useState('');

  const onCheckboxClick = () => {
    setIsTagSearch((v) => !v);
  };

  const handleKeyWord = (newKeyWord: string) => {
    setKeyWord(newKeyWord);
  };

  const addTagList = (tag: ITag) => {
    if (!tagList.some((eachTag) => eachTag.id === tag.id)) {
      const temp = tagList;
      temp.push(tag);
      setTagList(() => temp);
    }
  };

  const deleteTagList = (tagName: string) => {
    tagList.map((tag) => {
      if (tag.name === tagName) {
        const temp = tagList.filter((each) => each !== tag);
        setTagList(temp);
      }
      return null;
    });
  };

  useEffect(() => {
    const postFilter: IPostFilterProps = {
      postFilter: {
        tagIds: tagList.map((tag) => tag.id),
        title: keyWord,
      },
    };
    handlePostFilter(postFilter);
  }, [tagList.length, keyWord]);

  return (
    <S.MainSearchBarContainer>
      <TagCheckbox onCheckboxClick={onCheckboxClick} isChecked={isTagSearch} />
      {isTagSearch && tagList ? (
        <TagSearchBar
          addTagList={addTagList}
          wholeTagList={wholeTagList}
          onClick={() => setIsTagSearch(false)}
        />
      ) : (
        <TitleSearchBar handleKeyWord={handleKeyWord} />
      )}
      <TagList tagList={tagList} onDelete={deleteTagList} />
    </S.MainSearchBarContainer>
  );
}
