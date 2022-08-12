import { PostTemplate, ImageViewer } from 'components';
import { ITag, ICoordinates } from 'types';
import { useRouter } from 'next/router';
import { PostBody } from 'components/organisms/PostBody';
import { useAxiosInstance } from '@hooks/useAxiosInstance';
import { useState, useEffect } from 'react';
import { getOnePost, deletePost } from 'apis/post';

interface IPostInfo {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
  location: ICoordinates;
  imageUrls: string[];
}

export default function PostDetail() {
  const [postInfo, setPostInfo] = useState<IPostInfo | null>(null);

  const instance = useAxiosInstance();
  const router = useRouter();
  const { id } = router.query as { id: string };

  useEffect(() => {
    const getPost = async () => {
      if (!router.isReady) return;

      try {
        const response = await getOnePost({ instance, id });

        if (response) {
          const { title, datingDate, tags, content, location, imageUrls } =
            response;
          const newPost: IPostInfo = {
            title,
            date: datingDate,
            tagList: tags,
            content,
            location,
            imageUrls,
          };
          setPostInfo(newPost);
          return;
        }
        console.error('존재하지 않는 포스트');
        router.push('/404');
      } catch (error) {
        console.error(error);
        router.push('/404');
      }
    };
    getPost();
  }, [router, id, instance]);

  const handleEdit = () => {
    router.push(`/post/write/${id}`);
  };

  const handleDelete = async () => {
    if (!router.isReady) return;
    try {
      deletePost({ instance, id });
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (postInfo === null) return <div />;

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
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      }
    />
  );
}
