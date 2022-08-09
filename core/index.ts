import LocalStorage from 'utils/storage';
import { atom, AtomEffect } from 'recoil';
import { IUserResponse } from 'types/auth';

const LocalStorageEffect: AtomEffect<string | null> = ({ setSelf, onSet }) => {
  const savedValue = LocalStorage.getItem<string, null>('accessToken', null);
  setSelf(savedValue);

  onSet((newValue, _, isReset) =>
    isReset
      ? LocalStorage.removeItem('accessToken')
      : LocalStorage.setItem('accessToken', newValue),
  );
};

const userState = atom<string | null>({
  key: 'user',
  default: null,
  effects: [LocalStorageEffect],
});

export default userState;
