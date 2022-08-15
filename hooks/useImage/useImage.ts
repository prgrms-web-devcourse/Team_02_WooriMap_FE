import { useRef, useState } from 'react';
import { AxiosInstance } from 'axios';
import { uploadImage } from 'apis/image';

export function useImage({ image }: { image: string | null }) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(image);

  const onUpload = () => {
    // 클릭하면 ref에 연결된 input을 엽니다.
    ref.current?.click() as unknown as HTMLInputElement;
  };

  const onChange = async ({
    e,
    instance,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    instance: AxiosInstance;
  }) => {
    e.preventDefault();

    try {
      const { data } = await uploadImage({ e, instance });

      if (data) {
        setPreview(data);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return { ref, preview, onUpload, onChange };
}
