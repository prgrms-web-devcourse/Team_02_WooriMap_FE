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

export function updateCoupleInfo({
  instance,
  data,
}: {
  instance: AxiosInstance;
  data: { editDate: string };
}) {
  const res = instance
    .put('/couples', data)
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
  const res = instance
    .get('/couples/check')
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
  const accessToken = LocalStorage.getItem('accessToken', '');

  try {
    const res = instance
      .post('/couples/invite', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => response.data);

  return res;
}

export function getCoupleInfo({ instance }: { instance: AxiosInstance }) {
  const accessToken = LocalStorage.getItem('accessToken', '');

  const res = instance
    .get('/couples', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    });

  return res;
}
