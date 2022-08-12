import styled from '@emotion/styled';

export const Container = styled.button`
  all: unset;

  cursor: pointer;
  position: relative;
`;

export const ButtonWrapper = styled.span<{
  top: number;
  right: number;
}>`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
`;

export const FileInput = styled.input`
  display: none;
`;
