import { useState } from 'react';
import Link from 'next/link';
import { Button, Map, MapMarkerOverlay, MainSidebar } from 'components';
import { IMainPageTemplateProps } from 'types';
import { MapMarker } from 'react-kakao-maps-sdk';
import * as S from './MainPageTemplate.styles';

export function MainPageTemplate({
  coupleData,
  postList,
  coordinate,
  handlePostFilter,
}: IMainPageTemplateProps) {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  return (
    <S.Container>
      <MainSidebar
        coupleData={coupleData}
        postList={postList}
        handlePostFilter={handlePostFilter}
      />
      <S.MapContainer>
        <Map
          width="100%"
          height="100%"
          center={{
            lat: coordinate.latitude,
            lng: coordinate.longitude,
          }}
        >
          {postList.map((post) => (
            <MapMarker
              key={post.postId}
              position={{
                lat: Number(post.latitude),
                lng: Number(post.longitude),
              }}
              clickable
              onClick={() => {
                setIsOverlayShown(true);
                setSelectedMarker(post.postId);
              }}
              image={{
                src: './image/mapMarker.png',
                size: {
                  width: 40,
                  height: 50,
                },
              }}
            >
              {isOverlayShown && selectedMarker === post.postId && (
                <S.OverlayContainer
                  onClick={() => {
                    setIsOverlayShown(false);
                  }}
                >
                  <MapMarkerOverlay
                    postId={post.postId}
                    postThumbnailPath={post.postThumbnailPath}
                    title={post.title}
                    createDate={post.createDate}
                  />
                </S.OverlayContainer>
              )}
            </MapMarker>
          ))}
        </Map>
      </S.MapContainer>
      <Link href="/post/write" passHref>
        <S.ButtonContainer>
          <S.NewPostButton variant="blackOutlined" size="medium">
            새 글 작성
          </S.NewPostButton>
        </S.ButtonContainer>
      </Link>
    </S.Container>
  );
}
