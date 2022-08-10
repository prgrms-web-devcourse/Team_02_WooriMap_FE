import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostTemplate, ImageViewer, PostWrite } from 'components';
import { useForm, useAxiosInstance } from 'hooks';
import {
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
  IInitialPostState,
} from 'types';
import { postValidation, parsePostData, postInitialValue } from 'utils';
import { updatePost, getOnePost } from 'apis/post';

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
};

export default function PostEdit() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [postState, setPostState] = useState<{
    initalValue: IInitialPostState;
    status: 'initial' | 'settled';
  }>({
    initalValue: postInitialValue,
    status: 'initial',
  });

  const axiosInstance = useAxiosInstance();

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    const res = await updatePost({ instance: axiosInstance, data: values, id });

    console.log(res);
  };

  const { values, handleChange, handleSubmit, removeAll } = useForm<
    IPostFormState,
    IPostValidationState,
    IPostValidationProps
  >({
    initialValues: postState.initalValue,
    errorState,
    onSubmit,
    validateValues: postValidation,
  });

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;

      try {
        const res = await getOnePost({ instance: axiosInstance, id });

        if (res) {
          setPostState((prev) => ({
            ...prev,
            initalValue: parsePostData({ postData: res }) as IInitialPostState,
            status: 'settled',
          }));

          return;
        }

        throw new Error('존재하지 않는 포스트입니다.');
      } catch (e: unknown) {
        console.error(e);
        router.push('/404');
      }
    })();
  }, [router]);

  if (postState.status === 'initial') return null;

  const { title, content, datingDate, tags, latitude, longitude, imageUrls } =
    values;

  console.log(values);

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
