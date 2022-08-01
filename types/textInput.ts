export interface ITextInputProps {
  key?: string;
  name?: string;
  text?: string;
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  deleteAll?: (name: string) => void;
}
