import { TagList } from 'components/molecules/TagList';
import { ITag, ICoordinates } from 'types';

import * as S from './PostBody.styles';

interface ITag {
  name: string;
  color: string;
}
interface IPostBodyProps {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
  location: ICoordinates;
}

export function PostBody({
  title,
  date,
  tagList,
  content,
  location,
}: IPostBodyProps) {
  return (
    <S.Container>
      <S.Header>
        <S.TitleLine>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.TitleLine>
        <S.PostControl>
          <S.EditPostButton size="small">포스트 편집</S.EditPostButton>
          <S.DeletePostLink>포스트 삭제</S.DeletePostLink>
        </S.PostControl>
      </S.Header>
      <S.PostTags>
        <TagList tagList={tagList} />
      </S.PostTags>
      <S.PostContent>{content}</S.PostContent>
      <S.PostLocation
        width="100%"
        height={225}
        center={{ lat: location.latitude, lng: location.longitude }}
      />
    </S.Container>
  );
}
