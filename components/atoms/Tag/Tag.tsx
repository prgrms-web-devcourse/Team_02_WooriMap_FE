import * as S from './Tag.styles';

export interface ITagBase {
  tagName: string;
  tagColor?: string;
}
interface ITagProps extends ITagBase {
  onDelete?: () => void;
}

export function Tag({ name, color, onDelete, ...props }: ITagProps) {
  return (
    <S.Tag tagColor={tagColor} isDelete={!!onDelete} {...props}>
      {tagName}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
