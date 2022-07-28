import Avatar from 'public/image/avatar.svg';
import Image from 'next/image';
import * as S from './Profile.styles';

interface IProfileProps {
  width: number;
  height: number;
  path: string | null;
}

export function Profile({ width, height, path }: IProfileProps) {
  return (
    <S.Container width={width} height={height}>
      <Image
        src={path || Avatar}
        width={width}
        height={height}
        alt="Profile Image"
      />
    </S.Container>
  );

  //   { path }: { path: string | undefined }
}
