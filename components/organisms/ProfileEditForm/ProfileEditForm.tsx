import { ProfileUpload, Button, SubmitButton } from 'components';
import { useImage, useForm } from 'hooks';
import { IUserProps, IEditState, EditErrorTypes, IOnSubmit } from 'types';
import { profileEditValidation } from 'utils/formValidation';
import { CoupleForm } from './CoupleForm';
import { SoloForm } from './SoloForm';
import { setInitialState } from './helper';
import * as S from './ProfileEditForm.style';

export function ProfileEditForm({ user }: { user: IUserProps }) {
  const { isCouple, imageUrl } = user;

  const { initialValues, errorState } = setInitialState({
    user: user as IUserProps,
  });

  const { ref, preview, onUpload, onChange } = useImage({
    image: imageUrl as string,
  });

  const onSubmit = (value: IOnSubmit<IEditState>) => {
    console.log(preview);
    console.log(value);
  };

  const { values, errors, handleChange, handleSubmit, removeAll } = useForm<
    IEditState,
    EditErrorTypes,
    EditErrorTypes
  >({
    initialValues,
    errorState,
    onSubmit,
    validateValues: profileEditValidation,
  });

  return (
    <S.Container id="profileEdit" onSubmit={handleSubmit}>
      <S.InputsWrapper>
        <ProfileUpload
          ref={ref}
          preview={preview}
          onUpload={onUpload}
          onChange={onChange}
        />
        {isCouple && (
          <CoupleForm
            value={values}
            handleChange={handleChange}
            removeAll={removeAll}
            errors={errors}
          />
        )}
        {!isCouple && (
          <SoloForm
            value={values}
            handleChange={handleChange}
            removeAll={removeAll}
            errors={errors}
          />
        )}
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <Button size="small">취소</Button>
        <SubmitButton id="profileEdit" size="small" variant="black">
          완료
        </SubmitButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
