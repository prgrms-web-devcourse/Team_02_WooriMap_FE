import { atom, AtomEffect } from 'recoil';
import LocalStorage from 'utils/storage';
import { IUserResponse } from 'types/auth';
import { validateUser } from './helper';

const LocalStorageEffect: AtomEffect<IUserResponse | null> = ({
  setSelf,
  onSet,
}) => {
  const savedValue = LocalStorage.getItem('user', null);
  setSelf(validateUser(savedValue) ? savedValue : null);

  onSet((newValue, _, isReset) =>
    isReset
      ? LocalStorage.removeItem('user')
      : LocalStorage.setItem('user', newValue),
  );
};

const userState = atom<IUserResponse | null>({
  key: 'user',
  default: null,
  effects: [LocalStorageEffect],
});

export default userState;
