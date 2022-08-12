import { nanoid } from 'nanoid';
import { IUserProps, IEditState, EditErrorTypes, IEditInputProps } from 'types';

interface ISetInitialValueState {
  initialValues: IEditState;
  errorState: EditErrorTypes;
}

export const setInitialState = ({
  user,
}: {
  user: IUserProps;
}): ISetInitialValueState => {
  const { isCouple } = user;

  return isCouple
    ? {
        initialValues: {
          nickName: user.nickName,
          editDate: user.startDate,
        } as IEditState,
        errorState: { nickName: '' },
      }
    : {
        initialValues: { nickName: user.nickName } as IEditState,
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
