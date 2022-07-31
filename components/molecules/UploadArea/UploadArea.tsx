import Image from 'next/image';
import upload from 'public/images/upload.svg';
import * as S from './UploadArea.styles';

export function UploadArea() {
  return (
    <S.Container>
      <Image src={upload} width={174} height={174} alt="upload image" />
    </S.Container>
  );
}
