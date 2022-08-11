import Image from 'next/image';
import * as S from './CircularIcon.styles';

interface ICircularIconProps {
  src: string;
  color: string;
}

export function CircularIcon({ src, color }: ICircularIconProps) {
  return (
    <S.Container color={color}>
      <Image src={src} alt="icon" width={20} height={20} />
    </S.Container>
  );
}
