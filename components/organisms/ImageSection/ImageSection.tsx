import { useState } from 'react';
import { nanoid } from 'nanoid';
import { dummyImages } from 'utils';
import { IImageSource } from 'types';
import { ImageViewer, ImageViewerContainer } from 'components';
import * as S from './ImageSection.styles';

interface INextSources {
  selectedSource: string;
  nextSources: Array<IImageSource>;
}

export function ImageSection() {
  const [selectedImage, setSelectedImage] = useState<string>(dummyImages[0]);
  const [sources, setSources] = useState<Array<IImageSource>>(
    dummyImages.map((src: string, idx: number) => ({
      key: nanoid(),
      src,
      isSelected: idx === 0,
    })),
  );

  const onSelectImage = (key: string) => {
    const { selectedSource, nextSources } = sources.reduce(
      (acc: INextSources, curr: IImageSource) => {
        if (curr.key === key) {
          return {
            selectedSource: curr.src,
            nextSources: [...acc.nextSources, { ...curr, isSeleced: true }],
          };
        }

        return {
          ...acc,
          nextSources: [...acc.nextSources, { ...curr, isSeleced: false }],
        };
      },
      {
        selectedSource: '',
        nextSources: [],
      },
    );

    setSelectedImage(selectedSource);
    setSources(nextSources);
  };

  return (
    <S.Container>
      <ImageViewer size="large" src={selectedImage} />
      <ImageViewerContainer
        size="medium"
        sources={sources}
        onClick={onSelectImage}
      />
    </S.Container>
  );
}
