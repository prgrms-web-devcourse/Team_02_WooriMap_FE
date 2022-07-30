import * as S from './Tag.styles';

interface ITagProps {
  children: React.ReactNode;
  deletable?: boolean;
}

function Tag({ children, deletable, ...props }: ITagProps) {
  return (
    <S.Tag {...props}>
      {children}
      {deletable && <S.DeleteButton>X</S.DeleteButton>}
    </S.Tag>
  );
}

Tag.defaultProps = {
  deletable: false,
};

export default Tag;
