import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  position: relative;

  width: 65rem;
  height: 40rem;

  margin-left: -1rem;
`;

export const MapContainer = styled.div`
  width: 55rem;
  height: 100%;
  flex-grow: 1;

  z-index: 100;

  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const OverlayContainer = styled.div``;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;

  width: fit-content;

  border-radius: 3rem;

  z-index: 200;

  // 이 버튼은 atom 이상으로 강조가 되어야 해서 atom임에도 organism box-shadow를 사용하였습니다.
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;
