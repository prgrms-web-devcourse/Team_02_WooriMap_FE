import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  z-index: 1;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 75rem;
  height: 100%;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
