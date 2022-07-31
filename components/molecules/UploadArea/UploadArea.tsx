import Image from 'next/image';
import { Button } from 'components';
import upload from 'public/image/upload.svg';
import * as S from './UploadArea.styles';

export function UploadArea() {
  return (
    <S.Container>
      <Image src={upload} width={174} height={174} alt="upload image" />
      <Button variant="grayOutlined" size="large">
        Upload Image
      </Button>
    </S.Container>
  );
}
