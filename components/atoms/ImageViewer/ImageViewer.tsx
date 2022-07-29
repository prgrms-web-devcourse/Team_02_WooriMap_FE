import * as S from './ImageViewer.styles';

interface IImageViewerProps {
  width: number;
  height: number;
  src: string;
}

export function ImageViewer({ width, height, src }: IImageViewerProps) {
  return <S.Container src={src} width={width} height={height} />;
}
