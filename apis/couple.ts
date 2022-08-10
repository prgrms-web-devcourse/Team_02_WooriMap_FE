import LocalStorage from 'utils/storage';
import { AxiosInstance } from 'axios';

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
