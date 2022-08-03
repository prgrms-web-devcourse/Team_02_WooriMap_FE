import Image from 'next/image';
import deleteIcon from 'public/image/delete.svg';
import * as S from './TextArea.styles';

export function TextArea() {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };
  return (
    <S.TextAreaWrapper>
      <S.TextArea onChange={onChange} />
      <S.DeleteButton>
        <Image
          src={deleteIcon}
          alt="Delete All"
          width={16}
          height={16}
          onClick={() => {}}
        />
      </S.DeleteButton>
    </S.TextAreaWrapper>
  );
}
