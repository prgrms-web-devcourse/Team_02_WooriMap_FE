import { PostTemplate, ImageViewer, PostWrite } from 'components';
import { useForm } from 'hooks';
import {
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
} from 'types';
import { postValidation, dummyImages } from 'utils';

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
};

export default function PostEdit({
  initialValues,
}: {
  initialValues: IPostFormState;
}) {
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

  const { title, content, date, tags, latitude, longitude, imageUrls } = values;

  return (
    <PostTemplate
      type="edit"
      onSubmit={handleSubmit}
      imageSection={<ImageViewer images={imageUrls as Array<string>} />}
      contentSection={
        <PostWrite
          postState={{
            title,
            content,
            date,
            tags,
            latitude,
            longitude,
          }}
          handleChange={handleChange}
          deleteAll={removeAll}
        />
      }
    />
  );
}

export function getStaticProps({ params }: { params: { id: string } }) {
  console.log(params);
  const initialValues = {
    title: '너와의 첫 만남',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis doloremque distinctio sunt repudiandae iure. Voluptate at voluptatem consequuntur reprehenderit modi, necessitatibus ipsa nulla reiciendis tenetur, aliquid voluptatum esse culpa?',
    date: '2020-01-01',
    tags: ['여행', '친구', '여자친구'],
    imageUrls: dummyImages,
    latitude: '33.450701',
    longitude: '126.570667',
  };
  return {
    props: {
      initialValues,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  };
}
