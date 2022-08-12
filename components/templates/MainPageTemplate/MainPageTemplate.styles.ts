import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const MainSidebarContainer = styled.div`
  height: 100%;
  z-index: 100;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  align-self: stretch;
  background-color: lightgray;
`;

export const OverlayContainer = styled.div``;

export const ButtonContainer = styled.div`
  z-index: 500;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.5);
`;
