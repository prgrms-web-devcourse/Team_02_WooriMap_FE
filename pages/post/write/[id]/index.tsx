import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostTemplate, ImageViewer, PostWrite } from 'components';
import { useForm, useAxiosInstance, useToast } from 'hooks';
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

  const { createToast } = useToast({
    top: 10,
    right: 0,
  });

  const onSubmit = async ({ values }: { values: IPostFormState }) => {
    try {
      await updatePost({ instance: axiosInstance, data: values, id });
      createToast({
        message: '포스트가 성공적으로 수정되었습니다.',
        status: 'success',
        duration: 3000,
      });
      router.push('/');
    } catch (error) {
      createToast({
        message: '포스트 작성 실패',
        status: 'fail',
        duration: 3000,
      });
      console.error(error);
    }
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
