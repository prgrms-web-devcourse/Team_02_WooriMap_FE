export interface ITagState {
  name: string;
  color: string;
}

export interface IPostFormState {
  title: string;
  content: string;
  imageUrls: Array<string>;
  tags: Array<ITagState>;
  latitude: number;
  longitude: number;
}

export interface ISetValueState {
  name: string;
  value: string | number | Array<string> | Array<ITagState>;
}

export interface IFormStateProps {
  imageUrls?: Array<string>;
  postState?: IPostFormState;
  onSetFormState: ({ name, value }: ISetValueState) => void;
}
