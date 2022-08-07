export interface ITagState {
  name: string;
  color: string;
}

export interface IPostFormState {
  title: string;
  content: string;
  date: string;
  imageUrls?: Array<string>;
  tags: Array<ITagState>;
  latitude: number;
  longitude: number;
}

export interface IPostValidationProps {
  title: string;
  imageUrls: Array<string>;
  tags: Array<string>;
}

export interface IPostOnChangeProps {
  e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  name?: string;
  value?: T;
}

export interface IPostValidationState {
  title: string;
  imageUrls: string;
  tags: string;
}

export interface ISetValueState {
  name: string;
  value:
    | string
    | Array<string>
    | Array<ITagState>
    | { latitude: number; longitude: number };
}

export type HandleChangeTypes = ({
  e,
  name,
  value,
}: IPostOnChangeProps) => void;

interface IFormStateProps {
  handleChange: HandleChangeTypes;
}

export interface IFormImageProps extends IFormStateProps {
  imageUrls: Array<string>;
}

export interface IFormInputProps extends IFormStateProps {
  postState: IPostFormState;
  deleteAll: (name: string) => void;
}
