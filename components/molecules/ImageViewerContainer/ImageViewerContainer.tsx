import { nanoid } from 'nanoid';
import { dummyImages } from 'utils';
import { ImageViewer } from 'components/atoms/ImageViewer';
import * as S from './ImageViewerContainer.styles';

export function ImageViewerContainer() {
  return (
    <S.Container>
      {dummyImages.map((src: string) => (
        <ImageViewer key={nanoid()} size="medium" src={src} />
      ))}
    </S.Container>
  );
}
