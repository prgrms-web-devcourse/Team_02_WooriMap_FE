import { IQueryProps, IEditState, EditErrorTypes } from 'types';

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
          startDate: query.startDate,
        } as IEditState,
        errorState: { nickName: '' },
      }
    : {
        initialValues: { nickName: query.nickName } as IEditState,
        errorState: { nickName: '' },
      };
};
