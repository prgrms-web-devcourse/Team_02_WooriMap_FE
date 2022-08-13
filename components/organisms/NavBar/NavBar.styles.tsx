import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5rem;
`;

export const HeaderLogo = styled(Image)`
  opacity: 70%;

  cursor: pointer;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;
