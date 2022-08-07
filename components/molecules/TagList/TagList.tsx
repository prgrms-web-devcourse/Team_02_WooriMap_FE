import { ITag } from 'types';
import * as S from './TagList.styles';

interface ITagListProp {
  tagList: ITag[];
  onDelete?: (key: string) => void;
}

export function TagList({ tagList, onDelete }: ITagListProp) {
  const handleDelete = onDelete
    ? (key: string) => () => {
        onDelete(key);
      }
    : undefined;
  return (
    <S.TagListContainer>
      {tagList.map(({ name, color }) => (
        <S.MarginTag
          key={name}
          name={name}
          color={color}
          onDelete={handleDelete && handleDelete(name)}
        />
      ))}
    </S.TagListContainer>
  );
}
