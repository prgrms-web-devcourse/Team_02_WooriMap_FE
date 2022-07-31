import * as S from './Tag.styles';

interface ITagProps {
  name: string;
  tagColor: string;
  onDelete?: () => void;
}

function Tag({ name, tagColor, onDelete, ...props }: ITagProps) {
  return (
    <S.Tag tagColor={tagColor} {...props}>
      {name}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}

export default Tag;
