import { AxiosInstance } from 'axios';
import LocalStorage from 'utils/storage';
import { IPostFormState, ITag } from 'types';
import { IApiResponse } from 'types/api';

interface IPostWriteProps {
  data?: IPostFormState;
  instance: AxiosInstance;
  id?: string;
}

export function createPost({ data, instance }: IPostWriteProps) {
  const res = instance
    .post<IApiResponse<object>>('/couples/posts', data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const { response } = error;

      throw Error(response.message);
    });

  return res;
}

export function updatePost({ instance, data, id }: IPostWriteProps) {
  const res = instance
    .put(`/couples/posts/${id}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const { response } = error;

      throw Error(response.message);
    });

  return res;
}

export function getOnePost({ instance, id }: IPostWriteProps) {
  const res = instance
    .get(`/couples/posts/${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      const { response } = error;

      throw Error(response.message);
    });

  return res;
}

export const updatePost = async ({ instance, data, id }: IPostWriteProps) => {
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

export const getOnePost = async ({ instance, id }: IPostWriteProps) => {
  const accessToken = LocalStorage.getItem('accessToken', '');
  try {
    const res = await instance.get<IApiResponse<IPostDetailProps>>(
      `/couples/posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const { data } = res.data;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deletePost = async ({ instance, id }: IPostWriteProps) => {
  const accessToken = LocalStorage.getItem('accessToken', '');
  try {
    const res = await instance.delete<IApiResponse<object>>(
      `/couples/posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const { data } = res.data;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
