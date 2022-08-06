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

export interface IFormStateProps {
  imageUrls?: Array<string>;
  postState?: IPostFormState;
  onChange: (
    e?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
    name?: string | undefined,
    value?: IPostFormState | undefined,
  ) => void;
}
