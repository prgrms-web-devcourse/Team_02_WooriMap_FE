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
  const instance = useAxiosInstance();

  return (
    <>
      <S.Container onClick={onUpload}>
        <Profile width={128} height={128} path={preview} />
        <AddBtn />
      </S.Container>
      <S.FileInput
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .bmp"
        ref={ref}
        onChange={(e) => onChange({ e, instance })}
      />
    </>
  );
}

export default forwardRef(ProfileUpload);
