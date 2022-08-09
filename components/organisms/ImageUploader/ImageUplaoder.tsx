import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ImageList, UploadArea } from 'components';
import { IImageSource, IFormImageProps } from 'types';
import { fetchFile } from './helper';
import * as S from './ImageUploader.styles';

type IImages = Array<Omit<IImageSource, 'isSelected'>>;
type IImage = Omit<IImageSource, 'isSelected'>;

export function ImageUploader({ imageUrls, handleChange }: IFormImageProps) {
  const initialState: IImages = imageUrls?.map((src: string) => ({
    key: nanoid(),
    src,
  })) as IImages;

  const [uploadSrc, setUploadSrc] = useState<IImages>(initialState);

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, data } = await fetchFile(e);

    if (data) {
      setUploadSrc([...uploadSrc, { key: nanoid(), src: data.secure_url }]);
      handleChange({
        name,
        value: [...(imageUrls as Array<string>), data.secure_url],
      });
    }
  };

  const onDelete = (key: string) => {
    const nextSources = uploadSrc.filter((source: IImage) => {
      return source.key !== key;
    });

    setUploadSrc(nextSources);
    handleChange({
      name: 'imageUrls',
      value: nextSources.map((source: IImage) => {
        return source.src;
      }),
    });
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
