import { AxiosInstance } from 'axios';
import { SetterOrUpdater } from 'recoil';
import LocalStorage from 'utils/storage';
import { UserResponseType } from 'types/auth';

interface IUploadUserProps {
  instance: AxiosInstance;
  accessToken: string;
  setUser: SetterOrUpdater<UserResponseType | null>;
}
export async function updateUserInfoWhenCoupleLinked({
  instance,
  accessToken,
  setUser,
}: IUploadUserProps) {
  const res = instance
    .get('/members')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: null,
      };
    });

  const { data } = await res;

  if (data) {
    LocalStorage.setItem('accessToken', accessToken);
    setUser(data);
  }
}

export function updateMemberInfo({
  instance,
  data,
}: {
  instance: AxiosInstance;
  data: {
    imageUrl: string;
    nickName: string;
  };
}) {
  const res = instance
    .put('/members', data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: null,
      };
    });

  return res;
}

export function withdrawFromMember({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .delete('/members')
    .then((response) => {
      if (response.status === 204) {
        return true;
      }
      throw new Error('withdraw failed');
    })
    .catch((error) => {
      const { response } = error;

      console.error(response);
      return false;
    });

  return res;
}
