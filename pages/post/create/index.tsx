import { useState } from 'react';
import { IPostFormState, ISetValueState } from 'types';
import { formatDate } from 'utils';
import { PostTemplate, ImageUploader, PostWrite } from 'components';

const initialState: IPostFormState = {
  title: '',
  content: '',
  date: formatDate(),
  imageUrls: [],
  tags: [],
  latitude: 0,
  longitude: 0,
};

export default function PostCreate() {
  const [formState, setFormState] = useState<IPostFormState>(initialState);

  const onSetFormState = ({ name, value }: ISetValueState) => {
    if (name === 'position') {
      const { latitude, longitude } = value as {
        latitude: number;
        longitude: number;
      };
      setFormState((prev) => ({
        ...prev,
        latitude,
        longitude,
      }));

      return;
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <PostTemplate
      type="create"
      onSubmit={onSubmit}
      imageSection={
        <ImageUploader
          imageUrls={formState.imageUrls}
          onSetFormState={onSetFormState}
        />
      }
      contentSection={
        <PostWrite
          postState={{
            title: formState.title,
            content: formState.content,
            date: formState.date,
            tags: formState.tags,
            latitude: formState.latitude,
            longitude: formState.longitude,
          }}
          onSetFormState={onSetFormState}
        />
      }
    />
  );
}
