// import instance from 'apis/instance';
import LocalStorage from 'utils/storage';
import { AxiosInstance } from 'axios';

interface IUploadImageProps {
  e: React.ChangeEvent<HTMLInputElement>;
  instance: AxiosInstance;
}

export async function uploadImage({ e, instance }: IUploadImageProps) {
  const { name } = e.target;
  const file = e.target.files![0];

  try {
    const formData = new FormData();

    formData.append('file', file);

    const accessToken = LocalStorage.getItem('accessToken', '');

    const res = await instance.post<{ data: string }>('/image', formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      name,
      data: res?.data.data,
    };
  } catch (error: unknown) {
    console.error(e);
    return {
      name,
      data: '',
    };
  }
}
