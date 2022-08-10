import { useState } from 'react';
import { IMainPageTemplateProps, IThumbnailCardProps } from 'types';
import { Map, MapMarkerOverlay, MainSidebar } from 'components';
import { MapMarker } from 'react-kakao-maps-sdk';
import * as S from './MainPageTemplate.styles';

export function MainPageTemplate({
  coupleData,
  postList,
  coordinate,
}: IMainPageTemplateProps) {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  return (
    <S.Container>
      <S.MainSidebarContainer>
        <MainSidebar coupleData={coupleData} postList={postList} />
      </S.MainSidebarContainer>
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
              clickable={true}
              onClick={(e) => {
                setIsOverlayShown(true);
                setSelectedMarker(post.postId);
              }}
            >
              {isOverlayShown && selectedMarker === post.postId && (
                <div
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
                </div>
              )}
            </MapMarker>
          ))}
        </Map>
      </S.MapContainer>
    </S.Container>
  );
}
