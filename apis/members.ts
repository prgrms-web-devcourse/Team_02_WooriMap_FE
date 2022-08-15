import { AxiosInstance } from 'axios';
import { SetterOrUpdater } from 'recoil';
import LocalStorage from 'utils/storage';
import { IApiResponse } from 'types/api';
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
  const response = instance
    .get<IApiResponse<UserResponseType>>('/members')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: null,
      };
    });

  const { data } = await response;

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
  const response = instance
    .put<IApiResponse<Pick<UserResponseType, 'imageUrl' | 'nickName'>>>(
      '/members',
      data,
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: null,
      };
    });

  return response;
}

export function withdrawFromMember({ instance }: { instance: AxiosInstance }) {
  const response = instance
    .delete('/members')
    .then((res) => {
      if (res.status === 204) {
        return true;
      }
      throw new Error('withdraw failed');
    })
    .catch((error) => {
      const { response: errorResponse } = error;

      console.error(errorResponse);
      return false;
    });

  return response;
}
