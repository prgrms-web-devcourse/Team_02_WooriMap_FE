import { InputHTMLAttributes } from 'react';
import * as S from './Input.styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: IInputProps) {
  return <S.Input {...props} />;
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
