import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ImageList, UploadArea } from 'components';
import { IImageSource } from 'types';
import * as S from './ImageUploader.styles';

export function ImageUploader() {
  const [uploadSrc, setUploadSrc] = useState<
    Array<Omit<IImageSource, 'isSelected'>>
  >([
    {
      key: nanoid(),
      src: 'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/i1.jpg',
    },
    {
      key: nanoid(),
      src: 'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    },
  ]);

  const onDelete = (key: string) => {
    const nextSources = uploadSrc.filter(
      (source: Omit<IImageSource, 'isSelected'>) => {
        return source.key !== key;
      },
    );

    setUploadSrc(nextSources);
  };

  return (
    <S.Container>
      <UploadArea />
      <ImageList
        type="upload"
        sources={uploadSrc}
        onClick={onDelete}
        size="medium"
      />
    </S.Container>
  );
}
