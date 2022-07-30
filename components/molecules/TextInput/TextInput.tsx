import deleteIcon from 'public/image/delete.svg';
import * as S from './TextInput.styles';

interface ITextInputProps {
  onChange?: () => void;
  errors?: string;
}

function TextInput({ onChange, errors, ...styles }: ITextInputProps) {
  return (
    <S.TextInputWrapper {...styles}>
      <S.TextInput onChange={onChange} />
      <S.DeleteButton
        src={deleteIcon}
        alt="Delete All"
        width="16px"
        height="16px"
      />
    </S.TextInputWrapper>
  );
}

export default TextInput;
