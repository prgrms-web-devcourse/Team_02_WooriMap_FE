import { nanoid } from 'nanoid';
import {
  IQueryProps,
  IEditState,
  EditErrorTypes,
  IEditInputProps,
} from 'types';

interface ISetInitialValueState {
  initialValues: IEditState;
  errorState: EditErrorTypes;
}

export const setInitialState = ({
  query,
}: {
  query: IQueryProps;
}): ISetInitialValueState => {
  const { isCouple } = query;

  return isCouple
    ? {
        initialValues: {
          nickName: query.nickName,
          editDate: query.startDate,
        } as IEditState,
        errorState: { nickName: '' },
      }
    : {
        initialValues: { nickName: query.nickName } as IEditState,
        errorState: { nickName: '' },
      };
};

export const coupleTextInputProps: Array<IEditInputProps> = [
  {
    key: nanoid(),
    name: 'nickName',
    type: 'text',
    variant: 'input',
    text: '닉네임',
    placeholder: '닉네임을 입력해주세요',
  },
  {
    key: nanoid(),
    name: 'editDate',
    type: 'date',
    variant: 'calendar',
    text: '연애시작일',
  },
];
