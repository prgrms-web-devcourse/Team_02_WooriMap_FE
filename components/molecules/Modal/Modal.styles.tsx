import styled from '@emotion/styled';

interface IBackgroundDimStyleProps {
  isVisible: boolean;
}

export const BackgroundDim = styled.div<IBackgroundDimStyleProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;
