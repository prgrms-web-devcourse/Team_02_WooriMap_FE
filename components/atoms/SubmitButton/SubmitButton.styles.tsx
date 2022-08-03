import styled from '@emotion/styled';

export const SubmitButton = styled.input`
  font-size: 24px;
  padding: 1rem 0;

  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
`;
