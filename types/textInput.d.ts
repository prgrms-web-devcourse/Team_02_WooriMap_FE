export interface ITextInputProps {
  key?: string;
  value?: string | number | ITagState[];
  name?: string;
  text?: string;
  type?: string;
  variant?: 'input' | 'calendar' | 'tag' | 'textarea';
  placeholder?: string;
  handleChange?: HandleChangeTypes;
  deleteAll?: (name: string) => void;
}

export interface IInputState {
  email: string;
  nickName: string;
  password: string;
  confirmPassword: string;
  finalError?: string;
}
