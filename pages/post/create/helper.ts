import { FormValidation, formatDate } from 'utils';
import {
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
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
