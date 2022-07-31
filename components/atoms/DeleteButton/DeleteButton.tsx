import Image from 'next/image';
import { ImageBox } from 'components';
import deleteSvg from 'public/image/delete.svg';
import * as S from './DeleteButton.styles';

interface IDeleteButtonProps {
  size: 'small' | 'medium' | 'large';
  src: string;
  onClick: () => void;
}

function DeleteIcon({ onClick }: { onClick: () => void }) {
  return (
    <S.Wrapper onClick={onClick}>
      <Image src={deleteSvg} width={7} height={7} alt="delete button" />
    </S.Wrapper>
  );
}

export function DeleteButton({ size, src, onClick }: IDeleteButtonProps) {
  return (
    <S.Container>
      <ImageBox size={size} src={src} />
      <DeleteIcon onClick={onClick} />
    </S.Container>
  );
}
