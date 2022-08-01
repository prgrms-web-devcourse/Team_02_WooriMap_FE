import styled from '@emotion/styled';

export const FormBackground = styled.form`
  display: flex;
  justify-content: center;

  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  width: 500px;
  height: 624px;
`;
