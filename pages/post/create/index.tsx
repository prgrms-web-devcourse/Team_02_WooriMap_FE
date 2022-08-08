import { useForm } from 'hooks';
import { PostTemplate, ImageUploader, PostWrite } from 'components';
import { FormValidation, formatDate } from 'utils';
import {
  IPostValidationState,
  IPostValidationProps,
  IPostFormState,
} from 'types';

export const initialValues: IPostFormState = {
  title: '',
  content: '',
  date: formatDate(),
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

export const validateValues = ({
  title,
  imageUrls,
  tags,
}: IPostValidationProps) => {
  const errors: IPostValidationState = {
    title: '',
    imageUrls: '',
    tags: '',
  };

  const { validateTitle, validateImages, validateTags } = new FormValidation();

  errors.title = validateTitle({ title });

  errors.imageUrls = validateImages({ imageUrls });

  errors.tags = validateTags({ tags });

  return errors;
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
    validateValues,
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
            date: values.date,
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
