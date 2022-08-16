import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm, useAxiosInstance } from 'hooks';
import { PostTemplate, ImageUploader, PostWrite } from 'components';
import { postValidation, formatDate } from 'utils';
import {
  IPostValidationState,
  IPostValidationProps,
  IPostFormState,
} from 'types';
import { ToastContext } from 'context/ToastContext';
import { withCoupleRoute } from 'hocs';
import { createPost } from 'apis/post';

export const initialValues: IPostFormState = {
  title: '',
  content: '',
  datingDate: formatDate(),
  imageUrls: [],
  tags: [],
  latitude: 0,
  longitude: 0,
};

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
  latitude: '',
  longitude: '',
};

function PostCreate() {
  const instance = useAxiosInstance();

  const router = useRouter();
  const { createToast } = useContext(ToastContext);

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    try {
      await createPost({ data: values, instance });
      createToast({
        status: 'success',
        message: '새 포스트가 생성되었습니다.',
        duration: 3000,
      });
      router.push('/');
    } catch (error: unknown) {
      createToast({
        status: 'fail',
        message: '에러가 발생했습니다.',
        duration: 3000,
      });

      console.error(error);
    }
  };

  const { values, errors, handleChange, handleSubmit, removeAll, isChanged } =
    useForm<IPostFormState, IPostValidationState, IPostValidationProps>({
      initialValues,
      errorState,
      onSubmit,
      validateValues: postValidation,
    });

  return (
    <PostTemplate
      type="create"
      onSubmit={handleSubmit}
      isChanged={isChanged}
      imageSection={
        <ImageUploader
          imageUrls={values.imageUrls as Array<string>}
          handleChange={handleChange}
          error={errors.imageUrls}
        />
      }
      contentSection={
        <PostWrite
          postState={{
            title: values.title,
            content: values.content,
            datingDate: values.datingDate,
            tags: values.tags,
            latitude: values.latitude,
            longitude: values.longitude,
          }}
          handleChange={handleChange}
          deleteAll={removeAll}
          errorState={errors}
        />
      }
    />
  );
}

export default withCoupleRoute(PostCreate);
