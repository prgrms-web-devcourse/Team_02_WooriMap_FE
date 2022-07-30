import styled from '@emotion/styled';
import Image from 'next/image';

interface IWrapper {
  size: string;
  isSelected?: boolean;
}

export const Wrapper = styled.span<IWrapper>`
  width: fit-content;
  height: fit-content;

  box-sizing: border-box;
  border 1px solid ${({ isSelected }) => (isSelected ? '#00bcd4' : '#fff')};
`;

export const Viewer = styled(Image)`
  border-radius: 0.5rem;
`;
