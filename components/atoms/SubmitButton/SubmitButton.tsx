import { IButtonStyleProps } from 'types';
import * as S from './SubmitButton.styles';

interface ISubmitButtonProps extends IButtonStyleProps {
  id: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function SubmitButton({
  id,
  variant,
  size,
  children,
  style,
}: ISubmitButtonProps) {
  return (
    <S.SubmitButton
      form={id}
      variant={variant}
      size={size}
      type="submit"
      style={style}
    >
      {children}
    </S.SubmitButton>
  );
}
