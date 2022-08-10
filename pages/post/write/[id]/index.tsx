import { GetServerSidePropsContext } from 'next';
import { PostTemplate, ImageViewer, PostWrite } from 'components';
import {
  useForm,
  useAxiosInstance,
  useAxiosInstance as axiosInstance2,
} from 'hooks';
import {
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
  IPostDetailProps,
} from 'types';
import { postValidation, parseCookise, parsePostData } from 'utils';
import instance from 'apis/instance';
import { postEdit } from 'apis/post';

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
};

export default function PostEdit({
  id,
  data: initialValues,
}: {
  id: string;
  data: IPostDetailProps;
}) {
  const axiosInstance = useAxiosInstance();

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    console.log(values);
    const res = await postEdit({ instance: axiosInstance, data: values, id });

    console.log(res);
  };

  const { values, handleChange, handleSubmit, removeAll } = useForm<
    IPostFormState,
    IPostValidationState,
    IPostValidationProps
  >({
    initialValues: parsePostData({
      postData: initialValues,
    }),
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
        id,
        data,
      },
    };
  } catch (error: unknown) {
    console.log(error);
    // 에러나면, 404
    return {
      notFound: true,
    };
  }
}
