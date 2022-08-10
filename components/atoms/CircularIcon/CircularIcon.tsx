import Image from 'next/image';
import * as S from './CircularIcon.styles';

interface ICircularIconProps {
  icon: string;
  color: string;
}

export function CircularIcon({ icon, color }: ICircularIconProps) {
  return (
    <S.Container color={color}>
      <Image src={icon} alt="icon" width={20} height={20} />
    </S.Container>
  );
}
