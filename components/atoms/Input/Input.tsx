import { useState, useEffect } from 'react';
import * as S from './Input.styles';

interface IInputProps {
  name?: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteAll?: () => void;
}

function Input({
  name,
  type,
  defaultValue,
  placeholder,
  onChange,
  deleteAll,
  ...styles
}: IInputProps) {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  const deleteAllInput = () => {
    setInputValue('');
    // deleteAll(name);
  };

  useEffect(() => {
    if (defaultValue) setInputValue(defaultValue);
  }, [defaultValue]);

  return (
    <S.Input
      name={name}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChangeInput}
      {...styles}
    />
  );
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
