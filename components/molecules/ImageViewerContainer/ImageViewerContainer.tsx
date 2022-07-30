import { nanoid } from 'nanoid';
import { ImageViewer } from 'components/atoms/ImageViewer';
import * as S from './ImageViewerContainer.styles';

interface IImageViewerContainerProps {
  size: string;
  sources: Array<string>;
}

export function ImageViewerContainer({
  size,
  sources,
}: IImageViewerContainerProps) {
  return (
    <S.Container>
      {sources.map((src: string) => (
        <ImageViewer key={nanoid()} size={size} src={src} />
      ))}
    </S.Container>
  );
}
