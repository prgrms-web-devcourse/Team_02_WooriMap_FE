import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostTemplate, ImageViewer, PostWrite } from 'components';
import { useForm, useAxiosInstance } from 'hooks';
import {
  ITag,
  IPostFormState,
  IPostValidationState,
  IPostValidationProps,
  IInitialPostState,
  IPostDetailProps,
} from 'types';
import {
  postValidation,
  parsePostData,
  postInitialValue,
  checkStateIsValid,
} from 'utils';
import { updatePost, getOnePost } from 'apis/post';

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
};

export default function PostEdit() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [initialValues, setInitialValues] =
    useState<IInitialPostState>(postInitialValue);

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
    initialValues,
    errorState,
    onSubmit,
    validateValues: postValidation,
  });

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;

      try {
        const res = (await getOnePost({
          instance: axiosInstance,
          id,
        })) as IPostDetailProps;

        if (res) {
          setInitialValues(
            parsePostData({ postData: res }) as IInitialPostState,
          );

          return;
        }

        throw new Error('존재하지 않는 포스트입니다.');
      } catch (e: unknown) {
        console.error(e);
        router.push('/404');
      }
    })();
  }, [router, setInitialValues]);

  if (
    !checkStateIsValid<IPostValidationState>({
      errorState: postValidation({
        title: values.title,
        imageUrls: values.imageUrls as Array<string>,
        tags: values.tags as Array<ITag>,
      }),
    })
  )
    return null;

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
