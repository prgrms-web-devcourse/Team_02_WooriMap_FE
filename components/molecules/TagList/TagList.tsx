import { useState } from 'react';
import * as S from './TagList.styles';

interface ITag {
  tagName: string;
  tagColor: string;
}

interface ITagListProp {
  tagList: ITag[];
  deletable?: boolean;
}

export default function TagList({ tagList, deletable }: ITagListProp) {
  const [list, setList] = useState<ITag[]>(tagList);
  const handleDelete = (tagValue: string) => () => {
    const newList: ITag[] = [...list].filter(
      ({ tagName }) => tagName !== tagValue,
    );
    setList(newList);
  };

  return (
    <S.TagListContainer>
      {list.map(({ tagName, tagColor }) => (
        <S.PaddedTag
          key={tagName}
          tagName={tagName}
          tagColor={tagColor}
          onDelete={deletable ? handleDelete(tagName) : undefined}
        />
      ))}
    </S.TagListContainer>
  );
}
