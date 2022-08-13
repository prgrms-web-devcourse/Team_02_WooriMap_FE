import { TagList } from 'components/molecules/TagList';
import { ITag, ICoordinates } from 'types';
import { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

import * as S from './PostBody.styles';

interface IPostBodyProps {
  title: string;
  date: string;
  tagList: ITag[];
  content: string;
  location: ICoordinates;
  handleEdit: () => void;
  handleDelete: () => void;
}

export function PostBody({
  title,
  date,
  tagList,
  content,
  location,
  handleEdit,
  handleDelete,
}: IPostBodyProps) {
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleEdit();
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }
    handleDelete();
  };

  const { latitude: lat, longitude: lng } = location;

  return (
    <S.Container>
      <S.Header>
        <S.TitleLine>
          <S.Title>{title}</S.Title>
          <S.PostTags>
            <TagList tagList={tagList} />
          </S.PostTags>
          <S.Date>{date}</S.Date>
        </S.TitleLine>
        <S.PostControl>
          <S.EditPostButton size="small" onClick={handleEditClick}>
            포스트 편집
          </S.EditPostButton>
          <S.DeletePostButton size="small" onClick={handleDeleteClick}>
            {deleteConfirm ? '삭제 확인' : '포스트 삭제'}
          </S.DeletePostButton>
        </S.PostControl>
      </S.Header>
      <S.PostContent>{content}</S.PostContent>
      <S.PostLocation width="100%" height={225} center={{ lat, lng }}>
        <MapMarker
          position={{ lat, lng }}
          image={{
            src: 'https://i.imgur.com/iwOEvRP.png',
            size: {
              width: 24,
              height: 35,
            },
          }}
          title={content}
        />
      </S.PostLocation>
    </S.Container>
  );
}
