import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  ITag as ITagWithoutId,
  IPostFilterProps,
  IHandlePostFilterProps,
} from 'types';
import { TagList } from 'components';
import searchIcon from '../../../public/image/Search.png';
import * as S from './MainSearchBar.styles';

interface ITag extends ITagWithoutId {
  id: number;
}

function TagCheckbox({ onCheckboxClick }: { onCheckboxClick: () => void }) {
  return (
    <S.TagValidation>
      <input type="checkbox" onClick={onCheckboxClick} />
      <div>태그 검색하기</div>
    </S.TagValidation>
  );
}

function TagSearchBar({ addTagList }: { addTagList: (tag: ITag) => void }) {
  const getWholeTagList = () => {
    const dummyData: ITag[] = [
      {
        id: 1,
        name: '첫번째 태그',
        color: '#000000',
      },
      {
        id: 2,
        name: '두번째 태그',
        color: '#000000',
      },
      {
        id: 3,
        name: '세번째 태그',
        color: '#000000',
      },
      {
        id: 4,
        name: '네번째 태그',
        color: '#000000',
      },
      {
        id: 5,
        name: '다섯번째 태그',
        color: '#000000',
      },
    ];
    return dummyData;
  };
  const wholeTagList = getWholeTagList();
  const [inputValue, setInputValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const onFilteredTagClick = (tag: ITag) => {
    addTagList(tag);
    setInputValue('');
    if (input.current) {
      input.current.value = '';
    }
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
      {wholeTagList.length && inputValue !== '' && (
        <S.FilteredTagList>
          {wholeTagList
            .filter(({ name }) => name.includes(inputValue))
            .map(({ id, name, color }) => (
              <S.FilteredTag
                key={id}
                color={color}
                onClick={(e) => {
                  onFilteredTagClick({ id, name, color });
                }}
              >
                {name}
              </S.FilteredTag>
            ))}
        </S.FilteredTagList>
      )}
    </S.TagSearchBarContainer>
  );
}

function TitleSearchBar({
  handleKeyWord,
}: {
  handleKeyWord: (keyWord: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 이 부분에서 도저히 any를 쓰지 않고 어떻게 해야할 지 잘 모르겠습니다 ㅜㅠ
    const target: any = e.target;
    console.dir(target[0].value);
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

export function MainSearchBar({ handlePostFilter }: IHandlePostFilterProps) {
  const [isTagSearch, setIsTagSearch] = useState(false);
  const [tagList, setTagList] = useState<ITag[]>([]);
  const [keyWord, setKeyWord] = useState('');

  const onCheckboxClick = () => {
    setIsTagSearch((v) => !v);
  };

  const handleKeyWord = (keyWord: string) => {
    setKeyWord(keyWord);
  };

  const addTagList = (tag: ITag) => {
    if (!tagList.some((eachTag) => eachTag.id === tag.id)) {
      const temp = tagList;
      temp.push(tag);
      setTagList(temp);
      alert(`tagList에 ${tag}가 추가되었습니다.`);
    } else {
      alert(`해당 태그는 이미 존재합니다`);
    }
  };

  const deleteTagList = (tagName: string) => {
    tagList.map((tag) => {
      if (tag.name === tagName) {
        const temp = tagList.filter((each) => each !== tag);
        setTagList(temp);
        alert(`tag : ${tag.name} 가 무사히 제거되었습니다.`);
      }
    });
  };

  // useEffect(() => {

  // }, [tagList]);

  useEffect(() => {
    const postFilter: IPostFilterProps = {
      postFilter: {
        tagIds: tagList.map((tag) => tag.id),
        title: keyWord,
      },
    };
    handlePostFilter(postFilter);
    alert('postFilter가 변경되었습니다');
  }, [tagList.length, keyWord]);

  return (
    <S.MainSearchBarContainer>
      <TagCheckbox onCheckboxClick={onCheckboxClick} />
      {isTagSearch ? (
        <TagSearchBar addTagList={addTagList} />
      ) : (
        <TitleSearchBar handleKeyWord={handleKeyWord} />
      )}
      {!!tagList.length && (
        <TagList tagList={tagList} onDelete={deleteTagList} />
      )}
    </S.MainSearchBarContainer>
  );
}
