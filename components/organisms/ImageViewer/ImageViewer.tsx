import { useState } from 'react';
import { nanoid } from 'nanoid';
import { dummyImages } from 'utils';
import { IImageSource } from 'types';
import { ImageBox, ImageList } from 'components';
import * as S from './ImageViewer.styles';

interface INextSources {
  selectedSource: string;
  nextSources: Array<IImageSource>;
}

export function ImageViewer() {
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
            nextSources: [...acc.nextSources, { ...curr, isSelected: true }],
          };
        }

        return {
          ...acc,
          nextSources: [...acc.nextSources, { ...curr, isSelected: false }],
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
      <ImageBox size="large" src={selectedImage} />
      <ImageList
        type="read"
        size="small"
        sources={sources}
        onClick={onSelectImage}
      />
    </S.Container>
  );
}
