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

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'my-uploads');

        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dq4j0pffj/image/upload',
          {
            method: 'POST',
            body: formData,
          },
        );

        const data = await res.json();

        setUploadSrc([...uploadSrc, { key: nanoid(), src: data.secure_url }]);
      } catch (error: unknown) {
        console.error(e);
      }
    }
  };

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
      <UploadArea onUploadImage={onUploadImage} />
      <ImageList
        type="upload"
        sources={uploadSrc}
        onClick={onDelete}
        size="medium"
      />
    </S.Container>
  );
}
