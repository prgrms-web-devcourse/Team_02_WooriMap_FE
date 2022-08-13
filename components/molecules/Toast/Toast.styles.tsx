import styled from '@emotion/styled';

interface IToastContainerProps {
  top: number;
  right: number;
}

export const Container = styled.div<IToastContainerProps>`
  position: absolute;

  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;

  width: fit-content;
  height: fit-content;
`;
