import styled from '@emotion/styled';
import Image from 'next/image';

interface IWrapper {
  isSelected?: boolean;
}

export const Wrapper = styled.span<IWrapper>`
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 3px solid
    ${({ isSelected }) => (isSelected ? '#00bcd4' : 'transparent')};
`;

export const Viewer = styled(Image)`
  border-radius: 0.5rem;
`;
