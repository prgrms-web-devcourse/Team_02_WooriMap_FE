import { Map, NavBar, MainSidebar } from 'components';
import * as S from './MainPageTemplate.styles';
import { IMainSidebar } from '../../organisms/MainSidebar/MainSidebar';

interface IMainPageTemplateProps extends IMainSidebar {
  coordinate: {
    lat: number;
    lng: number;
  };
}
export function MainPageTemplate({
  coupleData,
  postList,
  coordinate,
}: IMainPageTemplateProps) {
  return (
    <S.Container>
      <NavBar />
      <MainSidebar coupleData={coupleData} postList={postList} />
      <S.MapContainer>
        <Map
          width="100%"
          height="100%"
          center={{
            lat: coordinate.lat,
            lng: coordinate.lng,
          }}
        />
      </S.MapContainer>
    </S.Container>
  );
}
