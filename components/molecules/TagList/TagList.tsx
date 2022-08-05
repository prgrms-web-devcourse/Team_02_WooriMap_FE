import { ITag } from 'types';
import * as S from './TagList.styles';

interface ITagListProp {
  tagList: ITag[];
}

export function TagList({ tagList }: ITagListProp) {
  return (
    <S.TagListContainer>
      {tagList.map(({ name, color }) => (
        <S.MarginTag key={name} name={name} color={color} />
      ))}
    </S.TagListContainer>
  );
}
