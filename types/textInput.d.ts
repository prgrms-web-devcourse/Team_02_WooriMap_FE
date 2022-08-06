export interface ITextInputProps {
  key?: string;
  value?: string;
  name?: string;
  text?: string;
  type?: string;
  variant?: 'input' | 'calendar' | 'tag' | 'textarea';
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<T>) => void;
  deleteAll?: (name: string) => void;
}

export interface IInputState {
  email: string;
  nickName: string;
  password: string;
  confirmPassword: string;
  finalError?: string;
}
