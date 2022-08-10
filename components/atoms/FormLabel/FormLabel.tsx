import { LabelHTMLAttributes } from 'react';
import * as S from './FormLabel.styles';

interface IFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string | number;
}

function FormLabel({ label, ...props }: IFormLabelProps) {
  return <S.FormLabel {...props}>{label}</S.FormLabel>;
}

export default FormLabel;
