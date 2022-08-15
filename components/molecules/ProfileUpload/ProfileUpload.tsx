import { forwardRef } from 'react';
import { Profile } from 'components';
import Image from 'next/image';
import { AxiosInstance } from 'axios';
import { useAxiosInstance } from 'hooks';
import plusButton from 'public/image/PlusButton.svg';
import * as S from './ProfileUpload.styles';

interface IProfileUploadProps {
  preview: string | null;
  onUpload: () => void;
  onChange: ({
    e,
    instance,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    instance: AxiosInstance;
  }) => void;
}

// AddBtn을 누르면 ref에 연결된 input File이 열립니다.
function AddBtn() {
  return (
    <S.ButtonWrapper top={0} right={0}>
      <Image src={plusButton} alt="plus button" />
    </S.ButtonWrapper>
  );
}

function ProfileUpload(
  { preview, onUpload, onChange }: IProfileUploadProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const imageInstance = useAxiosInstance(process.env.NEXT_PUBLIC_IMAGE_API_URL);

  return (
    <>
      <S.Container onClick={onUpload} type="button">
        <Profile width={128} height={128} path={preview} />
        <AddBtn />
      </S.Container>
      <S.FileInput
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .bmp"
        ref={ref}
        onChange={(e) => onChange({ e, instance: imageInstance })}
      />
    </>
  );
}

export default forwardRef(ProfileUpload);
