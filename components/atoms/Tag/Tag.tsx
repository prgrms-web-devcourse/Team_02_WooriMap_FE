import * as S from './Tag.styles';

export interface ITagBase {
  name: string;
  color?: string;
}
interface ITagProps extends ITagBase {
  onDelete?: () => void;
}

export function Tag({ name, color, onDelete, ...props }: ITagProps) {
  return (
    <S.Tag color={color} isDelete={!!onDelete} {...props}>
      {name}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
