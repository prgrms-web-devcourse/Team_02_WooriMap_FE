import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 480px;
  height: 1037px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0, 0, 16, rgba(0, 0, 0, 0.25);
  overflow: auto;
`;
