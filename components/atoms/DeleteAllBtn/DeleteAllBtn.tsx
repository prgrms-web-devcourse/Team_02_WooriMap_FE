import Image from 'next/image';
import deleteIcon from 'public/image/delete.svg';
import * as S from './DeleteAllBtn.styles';

export function DeleteAllBtn({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}) {
  return (
    <S.DeleteButton>
      <Image
        src={deleteIcon}
        alt="Delete All"
        width={16}
        height={16}
        onClick={onClick}
      />
    </S.DeleteButton>
  );
}
