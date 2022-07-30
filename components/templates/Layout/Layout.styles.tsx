import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: top;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Wrapper = styled.main<{ isLoggedIn: boolean }>`
  width: 100%;
  max-width: 75rem;
  height: 100%;

  ${({ isLoggedIn }) => isLoggedIn && `margin-top: 5rem;`})}

  box-sizing: border-box;
`;
