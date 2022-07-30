import { IImageSource } from 'types';
import { ImageViewer } from 'components/atoms/ImageViewer';
import * as S from './ImageViewerContainer.styles';

interface IImageViewerContainerProps {
  size: string;
  sources: Array<IImageSource>;
  onClick: (key: string) => void;
}

export function ImageViewerContainer({
  size,
  sources,
  onClick,
}: IImageViewerContainerProps) {
  return (
    <S.Container>
      {sources.map(({ key, src, isSelected }: IImageSource) => (
        <ImageViewer
          key={key}
          size={size}
          src={src}
          isSelected={isSelected}
          onClick={() => onClick(key)}
        />
      ))}
    </S.Container>
  );
}
