import { FormHTMLAttributes } from 'react';
import * as S from './FormBackground.styles';

interface IFormBackgroundProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

function FormBackground({ children, ...props }: IFormBackgroundProps) {
  return <S.FormBackground {...props}>{children}</S.FormBackground>;
}

export default FormBackground;
