import { useState } from 'react';
import deleteIcon from 'public/image/delete.svg';
import * as S from './TextInput.styles';

interface ITextInputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  deleteAll?: (name: string) => void;
}

function TextInput({
  name,
  type,
  placeholder,
  onChange,
  deleteAll,
  ...styles
}: ITextInputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange();
  };

  const onClickDeleteButton = () => {
    setInputValue('');
    if (deleteAll && name) deleteAll(name);
  };

  return (
    <S.TextInputWrapper {...styles}>
      <S.TextInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={inputValue}
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
