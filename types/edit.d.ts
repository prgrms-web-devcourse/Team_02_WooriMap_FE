export interface IQueryProps {
  isCouple: boolean;
  imageUrl: string;
  nickName?: string;
  startDate?: string;
}

export interface IEditState {
  nickName: string;
  editDate?: string;
}

export type EditErrorTypes = Omit<IEditState, 'editDate'>;

export interface IEditInputProps {
  key: string;
  name: string;
  type: 'text' | 'date';
  variant: 'input' | 'calendar';
  text: string;
  placeholder?: string;
}
