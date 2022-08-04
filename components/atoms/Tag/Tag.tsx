import * as S from './Tag.styles';

interface ITagProps {
  tagName: string;
  tagColor?: string;
  onDelete?: () => void;
}

export function Tag({ tagName, tagColor, onDelete, ...props }: ITagProps) {
  return (
    <S.Tag tagColor={tagColor} {...props}>
      {tagName}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}
