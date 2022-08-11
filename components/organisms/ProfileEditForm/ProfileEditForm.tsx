import { ProfileUpload, TextInputWithLabel } from 'components';
import { useImage, useForm } from 'hooks';
import { ParsedUrlQuery } from 'querystring';
import {
  IQueryProps,
  IEditState,
  EditErrorTypes,
  IOnSubmit,
  IEditInputProps,
} from 'types';
import { profileEditValidation } from 'utils/formValidation';
import { CoupleForm } from './CoupleForm';
import { SoloForm } from './SoloForm';
import { setInitialState, coupleTextInputProps } from './helper';
import * as S from './ProfileEditForm.style';

export function ProfileEditForm({
  query,
}: {
  query: IQueryProps | ParsedUrlQuery;
}) {
  const { isCouple, imageUrl } = query;

  const onSubmit = (value: IOnSubmit<IEditState>) => {
    console.log(value);
  };
  const { initialValues, errorState } = setInitialState({
    query: query as IQueryProps,
  });

  const { ref, preview, onUpload, onChange } = useImage({
    image: imageUrl as string,
  });

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
    <S.Container onSubmit={handleSubmit}>
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
    </S.Container>
  );
}
