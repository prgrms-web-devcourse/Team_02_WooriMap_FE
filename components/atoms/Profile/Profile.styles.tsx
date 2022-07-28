import styled from '@emotion/styled';

interface IContainerProps {
  width: number;
  height: number;
}

export const Container = styled.div<IContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
`;
