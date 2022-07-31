import Image from 'next/image';
import upload from 'public/image/upload.svg';
import * as S from './UploadArea.styles';

export function UploadArea() {
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

        console.log(data);
      } catch (error: unknown) {
        console.error(e);
      }
    }
  };

  return (
    <S.Container>
      <Image src={upload} width={174} height={174} alt="upload image" />
      <S.UploadArea>
        <S.UploadAreaInput
          type="file"
          accept="image/*"
          onChange={onUploadImage}
        />
        <p>이미지를 업로드하세요</p>
      </S.UploadArea>
    </S.Container>
  );
}
