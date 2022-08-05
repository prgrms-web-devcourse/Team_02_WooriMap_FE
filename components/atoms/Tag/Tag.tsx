import { ITag } from 'types';
import * as S from './Tag.styles';

export function Tag({ name, color, onDelete, ...props }: ITag) {
  if (name.length > 10 || color.length > 10) {
    console.log(`name: ${name}  color: ${color}`);
    throw new Error('Tag name/color Validation!!');
  }
  return (
    <S.Tag color={color} isDelete={!!onDelete} {...props}>
      {name}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
