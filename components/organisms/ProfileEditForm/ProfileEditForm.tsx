import { ProfileUpload } from 'components';
import { useImage } from 'hooks';
import * as S from './ProfileEditForm.style';

export function ProfileEditForm({ imageUrl }: { imageUrl: string | null }) {
  const { ref, preview, onUpload, onChange } = useImage({ image: imageUrl });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Container onSubmit={onSubmit}>
      <ProfileUpload
        ref={ref}
        preview={preview}
        onUpload={onUpload}
        onChange={onChange}
      />
    </S.Container>
  );
}
