import { ITag } from 'types';
import * as S from './Tag.styles';

interface ITagProps extends ITag {
  onDelete?: () => void;
}

export function Tag({ name, color, onDelete, ...props }: ITagProps) {
  if (name.length > 10 || color.length > 10) {
    console.error('Tag Name Length or Color Length is too Long!');
  }
  return (
    <S.Tag color={color} isDelete={!!onDelete} {...props}>
      {name}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
