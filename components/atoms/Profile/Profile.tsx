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

function Avatar({ width, height, path, isLink }: IProfileProps) {
  return (
    <S.Container width={width} height={height} isLink={isLink}>
      <Image
        src={path || defaultImg}
        width={width}
        height={height}
        objectFit="cover"
        alt="Profile Image"
        style={{
          borderRadius: '50%',
        }}
      />
    </S.Container>
  );
}

export function Profile(props: IProfileProps) {
  const { isLink } = props;
  return isLink ? (
    <Link href="/profile">
      <span style={{ cursor: 'pointer' }}>
        <Avatar {...props} />
      </span>
    </Link>
  ) : (
    <Avatar {...props} />
  );
}

Profile.defaultProps = {
  width: 100,
  height: 100,
  path: null,
  isLink: false,
};
