import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 700px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 10px 5px 5px red;
  overflow: auto;
`;
