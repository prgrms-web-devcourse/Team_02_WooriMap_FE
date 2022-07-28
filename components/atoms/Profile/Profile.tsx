import Image from 'next/image';
import Link from 'next/link';
import defaultImg from 'public/image/avatar.svg';
import * as S from './Profile.styles';

interface IProfileProps {
  width: number;
  height: number;
  path: string | null;
  isLink: boolean;
}

function Avatar({ width, height, path }: Omit<IProfileProps, 'isLink'>) {
  return (
    <S.Container width={width} height={height}>
      <Image
        src={path || defaultImg}
        width={width}
        height={height}
        alt="Profile Image"
      />
    </S.Container>
  );
}

export function Profile({ width, height, path, isLink }: IProfileProps) {
  return isLink ? (
    <Link href="/profile">
      <span style={{ cursor: 'pointer' }}>
        <Avatar width={width} height={height} path={path} />
      </span>
    </Link>
  ) : (
    <Avatar width={width} height={height} path={path} />
  );
}

Profile.defaultProps = {
  width: 100,
  height: 100,
  path: null,
  isLink: false,
};
