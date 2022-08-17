import Image from 'next/image';
import upload from 'public/image/upload.svg';
import * as S from './UploadArea.styles';

interface IUploadAreaProps {
  onUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export function UploadArea({ onUploadImage }: IUploadAreaProps) {
  const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (e.target instanceof HTMLInputElement) {
      e.target.value = '';
    }
  };

  return (
    <S.Container>
      <Image src={upload} width={174} height={174} alt="upload image" />
      <S.UploadArea>
        <S.UploadAreaInput
          name="imageUrls"
          type="file"
          accept="image/*"
          onChange={onUploadImage}
          onClick={onClick}
        />
        <p>이미지를 업로드하세요</p>
      </S.UploadArea>
    </S.Container>
  );
}
