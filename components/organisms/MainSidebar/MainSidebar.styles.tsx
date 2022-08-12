import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 1.5rem;

  width: 31rem;
  height: 100%;
  padding: 3rem 4rem 3rem 3rem;

  position: relative;
  left: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;
