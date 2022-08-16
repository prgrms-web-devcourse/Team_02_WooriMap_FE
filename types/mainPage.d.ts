export interface ICoupleUserProps {
  imageUrl: string | null;
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

export interface IMainSidebarProps extends IHandlePostFilterProps {
  coupleData: ICoupleProfileProps;
  postList: IThumbnailCardProps[];
}

export interface IMainPageTemplateProps extends IMainSidebarProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

// TODO: 중첩된 인터페이스를 밖으로 빼낸다.
export interface IPostFilterProps {
  tagIds: (number | undefined)[];
  title: string;
}

export interface IHandlePostFilterProps {
  handlePostFilter: (postFilter: IPostFilterProps) => void;
}

export interface IMainSearchBarProps extends IHandlePostFilterProps {
  wholeTagList: ITag[];
}
