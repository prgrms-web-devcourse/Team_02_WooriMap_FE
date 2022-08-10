import { IMainPageTemplateProps } from 'types';
import { Map, MainSidebar } from 'components';
import * as S from './MainPageTemplate.styles';

// 지금 Dependency cycle 에러가 나서 types import를 다 빼고 일일히 하드코딩 해 놓은 상태입니다. 해당 커밋 이후에 관련 types는 모두 추상화해서 types 폴더에 따로 빼 놓을 계획입니다.

export function MainPageTemplate({
  coupleData,
  postList,
  coordinate,
}: IMainPageTemplateProps) {
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
        />
      </S.MapContainer>
    </S.Container>
  );
}
