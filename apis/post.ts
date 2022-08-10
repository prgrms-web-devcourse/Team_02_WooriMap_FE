import { AxiosInstance } from 'axios';
import LocalStorage from 'utils/storage';
import { IPostFormState } from 'types';
import { IApiResponse } from 'types/api';

interface IPostCreateProps {
  data: IPostFormState;
  instance: AxiosInstance;
  id?: string;
}

export const postCreate = async ({ data, instance }: IPostCreateProps) => {
  try {
    const accessToken = LocalStorage.getItem('accessToken', '');

    const res = await instance
      .post<IApiResponse<object>>('/couples/posts', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((error) => {
        const { response } = error;

        return response?.data;
      });

    if (res.message) {
      return res.message;
    }

    return res.data;
  } catch (error: unknown) {
    console.error(error);
    return '서버에러';
  }
};

export const postEdit = async ({ instance, data, id }: IPostCreateProps) => {
  const accessToken = LocalStorage.getItem('accessToken', '');

  const response = instance
    .put(`/couples/posts/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      const { response: res } = error;

      return res?.data;
    });

  return response;
};
