import * as S from './ImageBox.styles';

interface IImageBoxProps {
  size: string;
  src: string;
  isSelected?: boolean;
  onClick?: () => void;
}

interface ISetSize {
  width: number;
  height: number;
}

export function ImageBox({
  size,
  src,
  isSelected = false,
  onClick,
}: IImageBoxProps) {
  const setSize = (): ISetSize =>
    size === 'medium' ? { width: 96, height: 96 } : { width: 624, height: 624 };

  return (
    <S.Wrapper size={size} isSelected={isSelected}>
      <S.Viewer
        src={src}
        onClick={onClick || (() => {})}
        {...setSize()}
        alt="Uploaded Image"
      />
    </S.Wrapper>
  );
}
