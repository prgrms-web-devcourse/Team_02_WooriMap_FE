import { useForm } from 'hooks';
import { PostTemplate, ImageUploader, PostWrite } from 'components';
import { postValidation, formatDate } from 'utils';
import {
  IPostValidationState,
  IPostValidationProps,
  IPostFormState,
} from 'types';

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
};

export default function PostCreate() {
  const onSubmit = ({ values }: { values: IPostFormState }) => {
    console.log(values);
  };

  const { values, handleChange, handleSubmit, removeAll } = useForm<
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
        />
      }
    />
  );
}
