import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ImageList, UploadArea } from 'components';
import { IImageSource, IFormStateProps } from 'types';
import { fetchFile } from './helper';
import * as S from './ImageUploader.styles';

type IImages = Array<Omit<IImageSource, 'isSelected'>>;
type IImage = Omit<IImageSource, 'isSelected'>;

export function ImageUploader({ imageUrls, onChange }: IFormStateProps) {
  const initialState: IImages = imageUrls?.map((src: string) => ({
    key: nanoid(),
    src,
  })) as IImages;

  const [uploadSrc, setUploadSrc] = useState<IImages>(initialState);

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, data } = await fetchFile(e);

    setUploadSrc([...uploadSrc, { key: nanoid(), src: data.secure_url }]);
    onChange({
      name,
      value: [...(imageUrls as Array<string>), data.secure_url],
    });
  };

  const onDelete = (key: string) => {
    const nextSources = uploadSrc.filter((source: IImage) => {
      return source.key !== key;
    });

    setUploadSrc(nextSources);
    onChange({
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
