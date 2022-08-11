import { PostTemplate, ImageViewer } from 'components';
import { ITag, ICoordinates } from 'types';
import { useRouter } from 'next/router';
import { PostBody } from 'components/organisms/PostBody';
import { useAxiosInstance } from '@hooks/useAxiosInstance';
import { useState, useEffect } from 'react';
import { getOnePost } from 'apis/post';

interface IPostInfo {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
  location: ICoordinates;
  imageUrls: string[];
}

const placeHolder: IPostInfo = {
  title: '기본 제목',
  date: '2022.08.11',
  tagList: [],
  content: '기본 내용',
  location: { latitude: 33, longitude: 128 },
  imageUrls: [
    'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+2.png',
  ],
};

export default function PostDetail() {
  const [postInfo, setPostInfo] = useState<IPostInfo>(placeHolder);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const instance = useAxiosInstance();
  const router = useRouter();
  const { id } = router.query as { id: string };

  useEffect(() => {
    const getPost = async () => {
      if (!router.isReady) return;

      try {
        setIsLoading(true);
        const res = await getOnePost({ instance, id });

        if (res) {
          const { title, datingDate, tags, content, location, imageUrls } = res;
          const newPost: IPostInfo = {
            title,
            date: datingDate,
            tagList: tags,
            content,
            location,
            imageUrls,
          };
          console.log(imageUrls);
          setPostInfo(newPost);
          return;
        }
        console.error('존재하지 않는 포스트');
      } catch (error) {
        console.error(error);
        router.push('/404');
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, [id, router, instance]);

  if (isLoading) return <div />;

  const { title, date, tagList, content, location, imageUrls } = postInfo;

  return (
    <PostTemplate
      type="detail"
      imageSection={<ImageViewer images={imageUrls} />}
      contentSection={
        <PostBody
          title={title}
          date={date}
          tagList={tagList}
          content={content}
          location={location}
        />
      }
    />
  );
}
