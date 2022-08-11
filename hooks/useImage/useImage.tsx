import { useRef, useState } from 'react';
import { AxiosInstance } from 'axios';
import { uploadImage } from 'apis/image';

export function useImage({ image }: { image: string | null }) {
  const ref = useRef<any | null>(null);
  const [preview, setPreview] = useState<string | null>(image);

  const onUpload = () => ref.current.click() as HTMLInputElement;

  const onChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    instance: AxiosInstance,
  ) => {
    const file = e.target.files![0];
    const formData = new FormData();

    formData.append('file', file);

    try {
      const { data } = await uploadImage({ e, instance });

      setPreview(data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return { ref, preview, onUpload, onChange };
}
