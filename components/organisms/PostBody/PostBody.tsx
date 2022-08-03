import { TagList } from 'components/molecules/TagList';
import * as S from './PostBody.styles';

interface ITag {
  tagName: string;
  tagColor: string;
  deletable?: boolean;
}

interface IPostBodyProps {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
}

export function PostBody({ title, date, tagList, content }: IPostBodyProps) {
  return (
    <S.Container>
      <S.Header>
        <S.TitleLine>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.TitleLine>
        <S.PostControl>
          <S.EditPostButton size="medium">포스트 편집</S.EditPostButton>
          <S.DeletePostLink>포스트 삭제</S.DeletePostLink>
        </S.PostControl>
      </S.Header>
      <S.PostTags>
        <TagList tagList={tagList} />
      </S.PostTags>
      <S.PostContent>{content}</S.PostContent>
    </S.Container>
  );
}
