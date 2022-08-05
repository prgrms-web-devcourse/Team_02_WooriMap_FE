import { ITag } from 'types';
import * as S from './Tag.styles';

export function Tag({ name, color, onDelete, ...props }: ITag) {
  return (
    <S.Tag color={color} isDelete={!!onDelete} {...props}>
      {name}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
