import styled from '@emotion/styled';
import Image from 'next/image';

interface IWrapper {
  isSelected?: boolean;
  size?: string;
}

export const Wrapper = styled.span<IWrapper>`
  border-radius: 0.5rem;
  outline: 0.25rem solid
    ${({ isSelected }) => (isSelected ? '#ff8f8f80' : 'transparent')};

  box-shadow: 0 8px 16px #00000088;
  filter: ${({ size }) => (size === 'small' ? 'grayscale(80%)' : 'none')};

  transform: none;
  transition: filter ease-in 0.2s, transform ease-in 0.2s;

  :hover {
    transform: ${({ size }) =>
      size === 'small' ? 'translateY(-0.25rem)' : 'none'};
    filter: none;
  }
`;

export const Viewer = styled(Image)`
  border-radius: 0.5rem;
`;
