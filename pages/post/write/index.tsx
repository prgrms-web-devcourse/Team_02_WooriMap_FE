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
      await createPost({ data: values, instance });
    } catch (error: unknown) {
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
