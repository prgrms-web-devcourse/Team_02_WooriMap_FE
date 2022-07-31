import deleteIcon from 'public/image/delete.svg';
import * as S from './TextInput.styles';

interface ITextInputProps {
  onChange?: () => void;
  name: string;
  placeholder: string;
}

function TextInput({
  onChange,
  name,
  placeholder,
  ...styles
}: ITextInputProps) {
  const deleteAll = (name: string) => {};

  return (
    <S.TextInputWrapper {...styles}>
      <S.TextInput onChange={onChange} name={name} placeholder={placeholder} />
      <S.DeleteButton
        src={deleteIcon}
        alt="Delete All"
        width={16}
        height={16}
        onClick={() => deleteAll(name)}
      />
    </S.TextInputWrapper>
  );
}

export default TextInput;
