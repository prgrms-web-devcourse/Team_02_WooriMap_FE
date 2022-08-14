import styled from '@emotion/styled';

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 11rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.pink};
  font-family: 'Noto Serif KR', serif;
  font-size: 2rem;
  font-weight: 900;
`;
