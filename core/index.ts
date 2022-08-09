import { atom, AtomEffect } from 'recoil';
import LocalStorage from 'utils/storage';
import { UserResponseType } from 'types/auth';
import { validateUser } from './helper';

const LocalStorageEffect: AtomEffect<UserResponseType | null> = ({
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

const userState = atom<UserResponseType | null>({
  key: 'user',
  default: null,
  effects: [LocalStorageEffect],
});

export default userState;
