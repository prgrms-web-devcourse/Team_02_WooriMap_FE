import * as S from './Tag.styles';

interface ITagProps {
  children: React.ReactNode;
}

function Tag({ children, ...props }: ITagProps) {
  return <S.Tag {...props}>{children}</S.Tag>;
}

export default Tag;
