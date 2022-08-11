export interface IQueryProps {
  isCouple: boolean;
  imageUrl: string;
  nickName?: string;
  startDate?: string;
}

export interface IEditState {
  nickName: string;
  startDate?: string;
}

export type EditErrorTypes = Omit<IEditState, 'startDate'>;
