import * as S from './Button.style';

interface ButtonProps {
  children: React.ReactNode;
  variant: string;
}

const Button = ({ variant, children }: ButtonProps) => {
  return <S.Button variant={variant}>{children}</S.Button>;
};

// Button.defaultProps = {
//   variant: 'black',
// };

export default Button;
