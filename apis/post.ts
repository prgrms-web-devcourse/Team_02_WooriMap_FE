import { AxiosInstance } from 'axios';
import { IPostFormState } from 'types';
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
