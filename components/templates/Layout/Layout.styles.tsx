import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 0;

  display: flex;
  align-items: top;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Wrapper = styled.main<{ isAuthPage: boolean }>`
  width: 100%;
  max-width: 100rem;
  flex: 1;

  ${({ isAuthPage }) => !isAuthPage && `margin-top: 5rem;`};

  box-sizing: border-box;
`;
