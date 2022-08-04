import { useState } from 'react';
import * as S from './TagList.styles';
import { ITagBase } from '../../atoms/Tag/Tag';

interface ITag extends ITagBase {
  deletable?: boolean;
}

interface ITagListProp {
  tagList: ITag[];
}

export function TagList({ tagList }: ITagListProp) {
  const [list, setList] = useState<ITag[]>(tagList);
  const handleDelete = (tagName: string) => () => {
    const newList: ITag[] = [...list].filter(({ name }) => name !== tagName);
    setList(newList);
  };

  return (
    <S.TagListContainer>
      {list.map(({ name, color, deletable }) => (
        <S.MarginTag
          key={name}
          name={name}
          color={color}
          onDelete={deletable ? handleDelete(name) : undefined}
        />
      ))}
    </S.TagListContainer>
  );
}
