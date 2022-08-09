import LocalStorage from 'utils/storage';
import { IPostFormState } from 'types';
import { IApiResponse } from 'types/api';
import instance from 'apis/instance';

export const postCreate = async ({ data }: { data: IPostFormState }) => {
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

    return res.data;
  } catch (error: unknown) {
    console.error(error);
    return {
      data: {},
    };
  }
};
