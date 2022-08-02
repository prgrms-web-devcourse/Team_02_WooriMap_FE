import { useState } from 'react';
import * as S from './TagList.styles';

interface ITag {
  tagName: string;
  tagColor: string;
  deletable?: boolean;
}

interface ITagListProp {
  tagList: ITag[];
}

export function TagList({ tagList }: ITagListProp) {
  const [list, setList] = useState<ITag[]>(tagList);
  const handleDelete = (tagValue: string) => () => {
    const newList: ITag[] = [...list].filter(
      ({ tagName }) => tagName !== tagValue,
    );
    setList(newList);
  };

  return (
    <S.TagListContainer>
      {list.map(({ tagName, tagColor, deletable }) => (
        <S.MarginTag
          key={tagName}
          tagName={tagName}
          tagColor={tagColor}
          onDelete={deletable ? handleDelete(tagName) : undefined}
        />
      ))}
    </S.TagListContainer>
  );
}
