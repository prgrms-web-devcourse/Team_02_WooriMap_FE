import { nanoid } from 'nanoid';
import { dummyImages } from 'utils';
import { ImageViewer } from 'components/atoms/ImageViewer';
import * as S from './ImageViewerContainer.styles';

export function ImageViewerContainer() {
  return (
    <S.Container>
      {dummyImages.map((src: string) => (
        <ImageViewer key={nanoid()} width={64} height={64} src={src} />
      ))}
    </S.Container>
  );
}
