import { IPostDetailProps, IPostFormState, ITag } from 'types';

interface IAcc {
  title: string;
  content: string;
  datingDate: string;
  imageUrls: Array<string>;
  tags: Array<ITag>;
  latitude: number;
  longitude: number;
}

const initalValue = {
  title: '',
  content: '',
  datingDate: '',
  imageUrls: [],
  tags: [],
  latitude: 0,
  longitude: 0,
};

type AccKeyTypes =
  | 'id'
  | 'title'
  | 'content'
  | 'datingDate'
  | 'createdDate'
  | 'imageUrls'
  | 'tags'
  | 'location';

export const parsePostData = ({
  postData,
}: {
  postData: IPostDetailProps;
}): IPostFormState => {
  return Object.keys(postData).reduce((acc: IAcc, key: string) => {
    if (key === 'id' || key === 'createdDate') return acc;

    if (key === 'location') {
      const { latitude, longitude } = postData.location;
      return {
        ...acc,
        latitude,
        longitude,
      };
    }

    return { ...acc, [key]: postData[key as AccKeyTypes] };
  }, initalValue);
};
