import * as S from './FormBackground.styles';

interface IFormBackgroundProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

function FormBackground({
  children,
  onSubmit,
  ...styles
}: IFormBackgroundProps) {
  return (
    <S.FormBackground onSubmit={onSubmit} {...styles}>
      {children}
    </S.FormBackground>
  );
}

export default FormBackground;
