import { useForm } from 'hooks';
import {
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
} from 'types';
import { PostTemplate, ImageUploader, PostWrite } from 'components';
import { initialValues, errorState, validateValues } from './helper';

export default function PostCreate() {
  const onSubmit = ({ values }: { values: IPostFormState }) => {
    console.log(values);
  };

  const { values, handleChange, handleSubmit, errors, removeAll } = useForm<
    IPostFormState,
    IPostValidationState,
    IPostValidationProps
  >({
    initialValues,
    errorState,
    onSubmit,
    validateValues,
  });

  return (
    <PostTemplate
      type="create"
      onSubmit={handleSubmit}
      imageSection={
        <ImageUploader imageUrls={values.imageUrls} onChange={handleChange} />
      }
      contentSection={
        <PostWrite
          postState={{
            title: values.title,
            content: values.content,
            date: values.date,
            tags: values.tags,
            latitude: values.latitude,
            longitude: values.longitude,
          }}
          onChange={handleChange}
          deleteAll={removeAll}
        />
      }
    />
  );
}
