import styled from '@emotion/styled';
import { Button } from 'components';

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

export const NewPostButton = styled(Button)`
  border: none;

  font-family: 'Noto Sans KR', serif;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 2.9rem;
  text-shadow: none;

  opacity: 70%;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;
