import * as S from './Button.styles';

interface IButtonProps {
  children: React.ReactNode;
  variant?: string;
  size: string;
  onClick: () => void;
}

function Button({ variant, children, size, onClick }: IButtonProps) {
  return (
    <S.Button variant={variant} size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
}

Button.defaultProps = {
  variant: 'black',
  width: 100,
  height: 50,
};

export default Button;
