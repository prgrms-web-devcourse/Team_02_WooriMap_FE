import { ProfileUpload, Button, SubmitButton } from 'components';
import { useImage, useForm } from 'hooks';
import { ParsedUrlQuery } from 'querystring';
import { IQueryProps, IEditState, EditErrorTypes, IOnSubmit } from 'types';
import { profileEditValidation } from 'utils/formValidation';
import { CoupleForm } from './CoupleForm';
import { SoloForm } from './SoloForm';
import { setInitialState } from './helper';
import * as S from './ProfileEditForm.style';

export function ProfileEditForm({
  query,
}: {
  query: IQueryProps | ParsedUrlQuery;
}) {
  const { isCouple, imageUrl } = query;

  const checkIsCouple = JSON.parse(isCouple as string);

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
    <S.Container id="profileEdit" onSubmit={handleSubmit}>
      <S.InputsWrapper>
        <ProfileUpload
          ref={ref}
          preview={preview}
          onUpload={onUpload}
          onChange={onChange}
        />
        {checkIsCouple && (
          <CoupleForm
            value={values}
            handleChange={handleChange}
            removeAll={removeAll}
            errors={errors}
          />
        )}
        {!checkIsCouple && (
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
