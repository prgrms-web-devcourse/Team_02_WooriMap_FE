import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 0 2rem 10rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: auto;
`;
