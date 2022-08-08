import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  position: relative;
  width: 1600px;
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
