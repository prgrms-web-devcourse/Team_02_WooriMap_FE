import { IButtonStyleProps } from 'types';
import * as S from './SubmitButton.styles';

interface ISubmitButtonProps extends IButtonStyleProps {
  id: string;
  children: React.ReactNode;
}

export function SubmitButton({
  id,
  variant,
  size,
  children,
}: ISubmitButtonProps) {
  return (
    <S.SubmitButton form={id} variant={variant} size={size} type="submit">
      {children}
    </S.SubmitButton>
  );
}
