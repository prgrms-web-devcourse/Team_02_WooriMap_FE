import * as S from './ImageViewer.styles';

interface IImageViewerProps {
  size: string;
  src: string;
}

interface ISetSize {
  width: number;
  height: number;
}

export function ImageViewer({ size, src }: IImageViewerProps) {
  const setSize = (): ISetSize =>
    size === 'medium' ? { width: 96, height: 96 } : { width: 624, height: 624 };

  return <S.Viewer src={src} {...setSize()} alt="Uploaded Image" />;
}
