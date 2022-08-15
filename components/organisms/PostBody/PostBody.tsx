import { TagList, Modal, Button } from 'components';
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
    setDeleteConfirm(true);
  };

  const handleDeleteConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleDelete();
  };

  const handleDeleteReject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleteConfirm(false);
  };

  const handleClickAway = () => {
    setDeleteConfirm(false);
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
            포스트 삭제
          </S.DeletePostButton>
        </S.PostControl>
      </S.Header>
      <S.PostContent>{content}</S.PostContent>
      <S.PostLocation width="100%" height={225} center={{ lat, lng }}>
        <MapMarker
          position={{ lat, lng }}
          image={{
            src: 'https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHzNaV%2FbtrJFPHq266%2FYSW64UbOvUPehLH6Kjo8bk%2Fimg.png',
            size: {
              width: 40,
              height: 50,
            },
          }}
          title={content}
        />
      </S.PostLocation>
      <Modal isVisible={deleteConfirm} onClose={handleClickAway}>
        <div>
          정말로 삭제하실건가요?
          <Button size="small" onClick={handleDeleteConfirm}>
            삭제
          </Button>
          <Button size="small" onClick={handleDeleteReject}>
            취소
          </Button>
        </div>
      </Modal>
    </S.Container>
  );
}
