import { dummyImages } from 'utils';
import { ImageViewer, ImageViewerContainer } from 'components';

import * as S from './ImageSection.styles';

export function ImageSection() {
  return (
    <S.Container>
      <ImageViewer size="large" src={dummyImages[0]} />
      <ImageViewerContainer size="medium" sources={dummyImages} />
    </S.Container>
  );
}
