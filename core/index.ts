import { atom } from 'recoil';
import { IUserResponse } from 'types/auth';

const userState = atom<IUserResponse | null>({
  key: 'user',
  default: null,
});

export default userState;
