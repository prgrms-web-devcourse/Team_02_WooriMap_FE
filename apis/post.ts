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

export async function updatePost({ instance, data, id }: IPostWriteProps) {
  const response = instance
    .put(`/couples/posts/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      const responseWithError = error.response;

      return responseWithError.data;
    });

  return response;
}

export async function getOnePost({ instance, id }: IPostWriteProps) {
  try {
    const response = await instance.get<IApiResponse<IPostDetailProps>>(
      `/couples/posts/${id}`,
    );

    const { data } = response.data;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deletePost({ instance, id }: IPostWriteProps) {
  try {
    const response = await instance.delete<IApiResponse<object>>(
      `/couples/posts/${id}`,
    );

    const { data } = response.data;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
