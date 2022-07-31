import { useState } from 'react';
import deleteIcon from 'public/image/delete.svg';
import * as S from './TextInput.styles';

interface ITextInputProps {
  name: string;
  placeholder: string;
  onChange?: () => void;
  deleteAll?: (name: string) => void;
}

function TextInput({
  onChange,
  name,
  placeholder,
  deleteAll,
  ...styles
}: ITextInputProps) {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange();
  };

  const onClickDeleteButton = () => {
    setInputValue('');
    if (deleteAll) deleteAll(name);
  };

  return (
    <S.TextInputWrapper {...styles}>
      <S.TextInput
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeInput}
      />
      <S.DeleteButton
        src={deleteIcon}
        alt="Delete All"
        width={16}
        height={16}
        onClick={onClickDeleteButton}
      />
    </S.TextInputWrapper>
  );
}

export default TextInput;
