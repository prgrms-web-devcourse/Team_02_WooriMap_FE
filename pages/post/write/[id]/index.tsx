/* eslint-disable react-hooks/rules-of-hooks */
import { PostTemplate, ImageViewer, PostWrite } from 'components';
import { useForm } from 'hooks';
import {
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
} from 'types';
import { postValidation, parseCookise } from 'utils';
import instance from 'apis/instance';
import { GetServerSidePropsContext } from 'next';

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
};

export default function PostEdit({
  data: initialValues,
}: {
  data: IPostFormState;
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

  const { title, content, datingDate, tags, latitude, longitude, imageUrls } =
    values;

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
            datingDate,
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const { cookie: cookieString } = context.req.headers;

  const { accessToken } = parseCookise({ cookieString: String(cookieString) });

  try {
    const res = await instance.get(`/couples/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // 정상이라면 처리
    const { data } = res.data;

    return {
      props: {
        data,
      },
    };
  } catch (error: unknown) {
    // 에러나면, 404
    return {
      notFound: true,
    };
  }
}
