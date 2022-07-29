import * as S from './Button.styles';

interface IButtonProps {
  children: React.ReactNode;
  variant?: string;
  width: number;
  height: number;
  onClick: () => void;
}

function Button({ variant, children, width, height, onClick }: IButtonProps) {
  return (
    <S.Button variant={variant} width={width} height={height} onClick={onClick}>
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
