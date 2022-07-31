import * as S from './Tag.styles';

interface ITagProps {
  name: string;
  onDelete?: () => void;
}

function Tag({ name, onDelete, ...props }: ITagProps) {
  return (
    <S.Tag {...props}>
      {name}
      {onDelete && <S.DeleteButton onClick={onDelete}>X</S.DeleteButton>}
    </S.Tag>
  );
}

export default Tag;
