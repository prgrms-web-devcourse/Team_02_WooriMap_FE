import styled from '@emotion/styled';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 16px;
  background-color: ${({ color }) => color};
`;
