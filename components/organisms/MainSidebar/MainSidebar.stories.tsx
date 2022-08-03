import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainSidebar } from './MainSidebar';

const coupleDummyData = {
  startDate: '2021-08-17',
  me: {
    profileImagePath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    nickname: 'mynick',
  },
  you: {
    profileImagePath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    nickname: 'yournick',
  },
};

const postDummyData = [
  {
    postId: '1',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '첫번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '2',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '두번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '3',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '세번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '4',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '네번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '5',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '다섯번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '6',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '여섯번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '7',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '일곱번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '8',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '여덟번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '9',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '아홉번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
  {
    postId: '10',
    postThumbnailPath:
      'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
    title: '열번째 포스트 썸네일',
    createDate: '2022-03-18',
  },
];

export default {
  title: 'Components/Organisms/MainSidebar',
  component: MainSidebar,
  argTypes: {
    coupleData: {
      defaultValue: coupleDummyData,
    },
    postList: {
      defaultValue: postDummyData,
    },
  },
} as ComponentMeta<typeof MainSidebar>;

export const Default: ComponentStory<typeof MainSidebar> = (args) => {
  return <MainSidebar {...args} />;
};
