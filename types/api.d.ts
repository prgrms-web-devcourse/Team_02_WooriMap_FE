export interface IApiResponse<T> {
  data: T;
}

export interface IOnSubmit<T> {
  values: T;
  setErrors?: Dispatch<SetStateAction<T>>;
}
