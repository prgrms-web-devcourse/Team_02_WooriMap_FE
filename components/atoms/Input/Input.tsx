import * as S from './Input.styles';

interface IInputProps {
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteAll?: () => void;
}

function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
  deleteAll,
  ...styles
}: IInputProps) {
  return (
    <S.Input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...styles}
    />
  );
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
