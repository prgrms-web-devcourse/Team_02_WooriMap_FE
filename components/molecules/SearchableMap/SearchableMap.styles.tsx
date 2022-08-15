import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  max-height: 250px;

  border-radius: 8px;
`;

export const Error = styled.div`
  font-size: 0.7rem;
  ${({ theme }) => theme.colors.alert};
`;
