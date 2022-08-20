import { useState, useEffect } from 'react';
import { PostTemplate, ImageViewer, PostBody, MetaTag } from 'components';
import { ITag, ICoordinates } from 'types';
import { useRouter } from 'next/router';
import { useAxiosInstance } from '@hooks/useAxiosInstance';
import { withCoupleRoute } from 'hocs';
import { getOnePost, deletePost } from 'apis/post';

interface IPostInfo {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
  location: ICoordinates;
  imageUrls: string[];
}
function PostDetail() {
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
    <>
      <MetaTag title={title}>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="우리맵" />
        <meta property="og:title" content={title || '우리맵'} />
        <meta
          property="og:description"
          content={content || '우리 갔던곳, 우리맵'}
        />
        <meta
          property="og:image"
          content={imageUrls[0] || 'https://i.imgur.com/ZzqdUZB.png'}
        />
      </MetaTag>
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
    </>
  );
}

export default withCoupleRoute(PostDetail);
