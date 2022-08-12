import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.span`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const IconContainer = styled.section`
  margin-right: 1rem;
`;

export const HeaderIcon = styled(Image)`
  opacity: 50%;

  cursor: pointer;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;
