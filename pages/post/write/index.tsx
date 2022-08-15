import { useForm, useAxiosInstance, useToast } from 'hooks';
import { PostTemplate, ImageUploader, PostWrite } from 'components';
import { postValidation, formatDate } from 'utils';
import {
  IPostValidationState,
  IPostValidationProps,
  IPostFormState,
} from 'types';
import { withCoupleRoute } from 'hocs';
import { createPost } from 'apis/post';
import { useRouter } from 'next/router';

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

  const { createToast } = useToast({
    top: 10,
    right: 0,
  });

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    try {
      await createPost({ data: values, instance });
      createToast({
        message: '포스트가 성공적으로 작성되었습니다.',
        status: 'success',
        duration: 3000,
      });
      router.push('/');
    } catch (error: unknown) {
      createToast({
        message: '포스트 작성 실패',
        status: 'fail',
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
