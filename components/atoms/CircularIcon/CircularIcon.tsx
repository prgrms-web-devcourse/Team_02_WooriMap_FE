import Image from 'next/image';
import * as S from './CircularIcon.styles';

interface ICircularIconProps {
  icon: string;
  color: string;
}

export function CircularIcon({ icon, color }: ICircularIconProps) {
  const onCircularIconClick = () => {
    alert('동글동글 아이콘을 클릭하셨군여! (ง˙∇˙)ว');
  };
  return (
    <S.Container
      color={color}
      onClick={() => {
        onCircularIconClick();
      }}
    >
      <Image src={icon} alt="icon" width={16} height={16} />
    </S.Container>
  );
}
