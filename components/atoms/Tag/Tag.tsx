import * as S from './Tag.styles';

interface ITagProps {
  value: string;
  tagColor: string;
  onDelete?: () => void;
}

export function Tag({ value, tagColor, onDelete, ...props }: ITagProps) {
  return (
    <S.Tag tagColor={tagColor} {...props}>
      <div>{value}</div>
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
