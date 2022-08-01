export interface ITextInputProps {
  key?: string;
  value: string;
  name?: string;
  text?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteAll?: (name: string) => void;
}

export interface IInputState {
  email: string;
  nickName: string;
  password: string;
  confirmPassword: string;
}
