import { ImageProps } from 'next/image';

export interface ICoupleUserProps {
  profileImagePath: string | null;
  nickName: string;
}

export interface IStartDateProps {
  startDate: string;
}

export interface ICoupleProfileProps extends IStartDateProps {
  me: ICoupleUserProps;
  you: ICoupleUserProps;
}

export interface IThumbnailCardProps {
  postId: string;
  postThumbnailPath: string;
  title: string;
  createDate: string;
  latitude?: string;
  longitude?: string;
}

export interface IMainSidebarProps {
  coupleData: ICoupleProfileProps;
  postList: IThumbnailCardProps[];
}

export interface IMainPageTemplateProps extends IMainSidebarProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
}
