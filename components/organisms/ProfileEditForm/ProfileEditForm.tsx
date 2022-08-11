import { ProfileUpload, TextInputWithLabel } from 'components';
import { useImage, useForm } from 'hooks';
import { ParsedUrlQuery } from 'querystring';
import { IQueryProps, IEditState, EditErrorTypes, IOnSubmit } from 'types';
import { profileEditValidation } from 'utils/formValidation';
import { setInitialState } from './helper';
import * as S from './ProfileEditForm.style';

function CoupleForm({ value }) {}

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

  const { values, errors, handleChange, handleSubmit } = useForm<
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
    </S.Container>
  );
}
