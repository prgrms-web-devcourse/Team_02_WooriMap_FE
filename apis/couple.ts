import LocalStorage from 'utils/storage';
import { AxiosInstance } from 'axios';
import { SetterOrUpdater } from 'recoil';
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

export function getLinkCouple({
  instance,
  code,
}: {
  instance: AxiosInstance;
  code: string;
}) {
  const res = instance
    .post('/couples', { code })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return {
        data: {
          accessToken: null,
        },
      };
    });

  return res;
}

export function getCheckIsCoupled({ instance }: { instance: AxiosInstance }) {
  const accessToken = LocalStorage.getItem('accessToken', '');

  const res = instance
    .get('/couples/check', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return {
        data: {
          accessToken: null,
        },
      };
    });

  return res;
}

export function getCoupleCode({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .post('/couples/invite')
    .then((response) => response.data)
    .catch((error) => {
      const { response } = error;

      console.error(response.message);

      return {
        code: '',
      };
    });

  return res;
}

export function getCoupleInfo({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .get('/couples')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const { response } = error;

      console.error(response.message);

      return {
        data: null,
      };
    });

  return res;
}
