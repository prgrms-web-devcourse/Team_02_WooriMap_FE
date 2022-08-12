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

  // 우리가 받아온 데이터와 DB에 들어가야할 데이터 포멧이 다르기 때문에 이를 포멧하는 함수입니다.
  const { initialValues, errorState } = setInitialState({
    user: user as IUserProps,
  });

  // 이미지 아이콘을 위한 훅 입니다.
  const { ref, preview, onUpload, onChange } = useImage({
    image: imageUrl as string,
  });

  // 취소 또는 정상 Submit이 되었을 때, 호출 되는 함수입니다.
  const routeToProfile = () => router.push('/profile');

  // 제출 하였을 때, 함수입니다.
  const onSubmit = async ({ values }: IOnSubmit<IEditState>) => {
    // 맴버 정보는 기본적으로 들어가야하는 값이므로, 상단으로 빼놨습니다.
    const memberUpdateInfo = {
      imageUrl: preview as string,
      nickName: values.nickName as string,
    };

    // 이후, 커플인지 아닌지를 체크하는 로직입니다.
    if (isCouple) {
      const coupleUpdateInfo = {
        editDate: values.editDate as string,
      };

      // Promise.all로 하는 이유는 date한 일자는 커플 정보 업데이트로 빠져있기 때문에 이와 같이 처리하였습니다.
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

      // 모두 잘 처리 되었다면, 리코일 상태 업데이트하고 프로필 리스트로 돌아갑니다.
      if (memberResponse.data) {
        setUser({ ...userRecoilState, ...memberResponse.data });

        // 성공했을 때 profile로 이동
        routeToProfile();
      }
    } else {
      // 이 부분은 커플이 아닌 경우입니다.
      const response = await updateMemberInfo({
        instance,
        data: memberUpdateInfo,
      });

      // 만약 요청이 정상 처리되었다면
      if (response.data) {
        setUser({ ...userRecoilState, ...response.data });

        // 성공했을 때 profile로 이동
        routeToProfile();
      }
    }
  };

  // useForm을 사용하여 폼의 상태를 관리하였습니다.
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

  // 이후, 커플인지 아닌지 조건에 따른 UI를 보여줍니다.

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
