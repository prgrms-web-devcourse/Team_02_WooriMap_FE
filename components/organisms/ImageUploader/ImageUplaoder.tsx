import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ImageList, UploadArea } from 'components';
import { IImageSource, IFormStateProps } from 'types';
import * as S from './ImageUploader.styles';

type IImages = Array<Omit<IImageSource, 'isSelected'>>;
type IImage = Omit<IImageSource, 'isSelected'>;

export function ImageUploader({ imageUrls, onSetFormState }: IFormStateProps) {
  const initialState: IImages = imageUrls?.map((src: string) => ({
    key: nanoid(),
    src,
  })) as IImages;

  const [uploadSrc, setUploadSrc] = useState<IImages>(initialState);

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'my-uploads');

        // 임시로 aws가 아닌 cloudinary로 이미지 업로드 처리했습니다.
        // 나중에 api 완료 되면 url만 변경하여 처리할 예정입니다.
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dq4j0pffj/image/upload',
          {
            method: 'POST',
            body: formData,
          },
        );

        const data = await res.json();

        setUploadSrc([...uploadSrc, { key: nanoid(), src: data.secure_url }]);
        onSetFormState({
          name: 'imageUrls',
          value: [...(imageUrls as Array<string>), data.secure_url],
        });
      } catch (error: unknown) {
        console.error(e);
      }
    }
  };

  const onDelete = (key: string) => {
    const nextSources = uploadSrc.filter((source: IImage) => {
      return source.key !== key;
    });

    setUploadSrc(nextSources);
    onSetFormState({
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
