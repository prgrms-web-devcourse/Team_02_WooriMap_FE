import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 1rem;

  width: 22rem;
  height: 100%;
  padding: 2rem 3rem 2rem 2rem;

  position: relative;
  left: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;
