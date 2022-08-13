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
  boxShadow?: string;
}

export function ImageBox({ size, src, isSelected, onClick }: IImageBoxProps) {
  const setSize = (): ISetSize => {
    switch (size) {
      case 'small':
        return { width: 96, height: 96 };
      case 'medium':
        return { width: 136, height: 136 };
      case 'large':
        return { width: 624, height: 624, boxShadow: '1px 10px 9px #000000' };
      default:
        return { width: 96, height: 96 };
    }
  };

  return (
    <S.Wrapper isSelected={isSelected} size={size}>
      <S.Viewer
        src={src}
        onClick={onClick || (() => {})}
        {...setSize()}
        alt="Uploaded Image"
        quality={100}
      />
    </S.Wrapper>
  );
}
