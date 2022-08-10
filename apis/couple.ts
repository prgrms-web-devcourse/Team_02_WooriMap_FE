import LocalStorage from 'utils/storage';
import { AxiosInstance } from 'axios';

export function getLinkCouple({
  instance,
  code,
}: {
  instance: AxiosInstance;
  code: string;
}) {
  const accessToken = LocalStorage.getItem('accessToken', '');

  const res = instance
    .post(
      '/couples',
      { code },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
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
  } catch (error: unknown) {
    console.error(error);
    return { code: '' };
  }
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
