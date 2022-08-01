export interface ITextInputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  deleteAll?: (name: string) => void;
}
