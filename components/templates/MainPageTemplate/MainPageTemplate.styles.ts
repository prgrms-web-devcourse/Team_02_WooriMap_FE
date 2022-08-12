import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  position: relative;

  width: 75rem;
  height: 52rem;

  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const MainSidebarContainer = styled.div`
  width: 23rem;
  height: 100%;
`;

export const MapContainer = styled.div`
  width: 52rem;
  height: 100%;

  z-index: 100;
`;

export const OverlayContainer = styled.div``;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;

  z-index: 200;

  // 이 버튼은 atom 이상으로 강조가 되어야 해서 atom임에도 organism box-shadow를 사용하였습니다.
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;
