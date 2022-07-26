import styled from '@emotion/styled';

interface IContainerProps {
  width: number;
  height: number;
  isLink: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
`;
