import * as S from './Button.styles';

interface IButtonProps {
  children: React.ReactNode;
  variant?: string;
}

function Button({ variant, children }: IButtonProps) {
  return <S.Button variant={variant}>{children}</S.Button>;
}

Button.defaultProps = {
  variant: 'black',
};

export default Button;
