import styled from '@emotion/styled';

export const FormBackground = styled.form`
  display: flex;
  flex-direction: column;

  width: 27rem;
  height: 40rem;

  position: relative;
  top: 2rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;
