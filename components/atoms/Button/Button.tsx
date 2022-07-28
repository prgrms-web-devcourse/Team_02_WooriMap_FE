import * as S from './Button.styles';

interface IButtonProps {
  children: React.ReactNode;
  variant?: string;
  width: number;
  height: number;
}

function Button({ variant, children, width, height }: IButtonProps) {
  return (
    <S.Button variant={variant} width={width} height={height}>
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
