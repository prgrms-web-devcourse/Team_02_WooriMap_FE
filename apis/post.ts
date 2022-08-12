import { AxiosInstance } from 'axios';
import { IPostFormState, IPostDetailProps } from 'types';
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
    .put<IApiResponse<object>>(`/couples/posts/${id}`, data)
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
    .get<IApiResponse<IPostDetailProps>>(`/couples/posts/${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      const { response } = error;

      throw Error(response.message);
    });

  return res;
}

export function deletePost({ instance, id }: IPostWriteProps) {
  const response = instance
    .delete<IApiResponse<object>>(`/couples/posts/${id}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      const res = error.response;

      throw Error(res.message);
    });

  return response;
}
