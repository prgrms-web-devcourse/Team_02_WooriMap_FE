import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 1rem;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.8rem;
  & > a {
    color: #ff8f8f;

    margin-left: 0.5rem;
  }
`;
