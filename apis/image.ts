import { AxiosInstance } from 'axios';

interface IUploadImageProps {
  e: React.ChangeEvent<HTMLInputElement>;
  instance: AxiosInstance;
}

export function uploadImage({ e, instance }: IUploadImageProps) {
  const { name } = e.target;
  const file = e.target.files![0];

  const formData = new FormData();
  formData.append('file', file);

  const res = instance
    .post<{ data: string }>('/image', formData)
    .then((response) => {
      return {
        name,
        data: response.data.data,
      };
    })
    .catch((error) => {
      const { response } = error;
      console.error(response.data.message);

      return {
        name,
        data: '',
      };
    });

  return res;
}
