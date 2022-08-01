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
