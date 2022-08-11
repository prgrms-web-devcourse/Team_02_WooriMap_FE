import userState from 'core';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { ProfileUpload, Button, SubmitButton } from 'components';
import { useImage, useForm, useAxiosInstance } from 'hooks';
import { IUserProps, IEditState, EditErrorTypes, IOnSubmit } from 'types';
import { UserResponseType } from 'types/auth';
import { updateMemberInfo, updateCoupleInfo } from 'apis/couple';
import { profileEditValidation } from 'utils/formValidation';
import { CoupleForm } from './CoupleForm';
import { SoloForm } from './SoloForm';
import { setInitialState } from './helper';
import * as S from './ProfileEditForm.style';

export function ProfileEditForm({
  user,
  userRecoilState,
}: {
  user: IUserProps;
  userRecoilState: UserResponseType;
}) {
  const router = useRouter();
  const instance = useAxiosInstance();
  const setUser = useSetRecoilState(userState);

  const { isCouple, imageUrl } = user;

  const { initialValues, errorState } = setInitialState({
    user: user as IUserProps,
  });

  const { ref, preview, onUpload, onChange } = useImage({
    image: imageUrl as string,
  });

  const routeToProfile = () => router.push('/profile');

  const onSubmit = async ({ values }: IOnSubmit<IEditState>) => {
    console.log('sd');
    const memberUpdateInfo = {
      imageUrl: preview as string,
      nickName: values.nickName as string,
    };

    if (isCouple) {
      const coupleUpdateInfo = {
        editDate: values.editDate as string,
      };

      const response = await Promise.all([
        updateCoupleInfo({
          instance,
          data: coupleUpdateInfo,
        }),
        updateMemberInfo({
          instance,
          data: memberUpdateInfo,
        }),
      ]);

      const [, memberResponse] = response;

      if (memberResponse.data) {
        setUser({ ...userRecoilState, ...memberResponse.data });

        // 성공했을 때 profile로 이동
        routeToProfile();
      }
    } else {
      const response = await updateMemberInfo({
        instance,
        data: memberUpdateInfo,
      });

      if (response.data) {
        setUser({ ...userRecoilState, ...response.data });

        // 성공했을 때 profile로 이동
        routeToProfile();
      }
    }
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
        <Button size="small" onClick={routeToProfile} type="button">
          취소
        </Button>
        <SubmitButton id="profileEdit" size="small" variant="black">
          완료
        </SubmitButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
