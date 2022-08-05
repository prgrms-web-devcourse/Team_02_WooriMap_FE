import { useState } from 'react';
import { IPostFormState, ISetValueState } from 'types';
import { PostTemplate, ImageUploader, PostWrite } from 'components';

const initialState: IPostFormState = {
  title: '',
  content: '',
  imageUrls: [],
  tags: [],
  latitude: 0,
  longitude: 0,
};

export default function PostCreate() {
  const [formState, setFormState] = useState<IPostFormState>(initialState);

  const onSetFormState = ({ name, value }: ISetValueState) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PostTemplate
      imageSection={
        <ImageUploader
          imageUrls={formState.imageUrls}
          onSetFormState={onSetFormState}
        />
      }
      contentSection={<PostWrite />}
    />
  );
}
