import * as S from './ImageBox.styles';

interface IImageBoxProps {
  size: 'small' | 'medium' | 'large';
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
  const setSize = (): ISetSize => {
    switch (size) {
      case 'small':
        return { width: 96, height: 96 };
      case 'medium':
        return { width: 136, height: 136 };
      case 'large':
        return { width: 624, height: 624 };
      default:
        return { width: 96, height: 96 };
    }
  };
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
