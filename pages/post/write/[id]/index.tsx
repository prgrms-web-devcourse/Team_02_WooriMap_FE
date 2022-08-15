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
import { withCoupleRoute } from 'hocs';
import { updatePost, getOnePost } from 'apis/post';

export const errorState: IPostValidationState = {
  title: '',
  imageUrls: '',
  tags: '',
  latitude: '',
  longitude: '',
};

function PostEdit() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const axiosInstance = useAxiosInstance();

  const [loading, setLoading] = useState(true);

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    await updatePost({ instance: axiosInstance, data: values, id });
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    removeAll,
    setAllState,
    isChanged,
  } = useForm<IPostFormState, IPostValidationState, IPostValidationProps>({
    initialValues: postInitialValue,
    errorState,
    onSubmit,
    validateValues: postValidation,
  });

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;

      try {
        const res = await getOnePost({
          instance: axiosInstance,
          id,
        });

        if (res) {
          setAllState(parsePostData({ postData: res }) as IInitialPostState);

          setLoading(false);
          return;
        }

        throw new Error('존재하지 않는 포스트입니다.');
      } catch (e: unknown) {
        console.error(e);
        router.push('/404');
      }
    })();
  }, [axiosInstance, id, router, setAllState]);

  // 현재 값이 유효하지 않으면 로딩 화면 ( 스켈레톤 계획 )
  if (loading) return null;

  // 현재 값이 유효하다면
  const { title, content, datingDate, tags, latitude, longitude, imageUrls } =
    values;

  return (
    <PostTemplate
      type="edit"
      onSubmit={handleSubmit}
      isChanged={isChanged}
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
          errorState={errors}
        />
      }
    />
  );
}

export default withCoupleRoute(PostEdit);
