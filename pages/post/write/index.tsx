import { useForm, useAxiosInstance } from 'hooks';
import { PostTemplate, ImageUploader, PostWrite } from 'components';
import { postValidation, formatDate } from 'utils';
import {
  IPostValidationState,
  IPostValidationProps,
  IPostFormState,
} from 'types';
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

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    try {
      const response = await createPost({ data: values, instance });

      if (response) {
        console.log(response);
      } else {
        console.log('정상 성공!');
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const { values, errors, handleChange, handleSubmit, removeAll } = useForm<
    IPostFormState,
    IPostValidationState,
    IPostValidationProps
  >({
    initialValues,
    errorState,
    onSubmit,
    validateValues: postValidation,
  });

  return (
    <PostTemplate
      type="create"
      onSubmit={handleSubmit}
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
