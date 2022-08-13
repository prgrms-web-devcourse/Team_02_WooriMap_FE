import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const IconContainer = styled.section`
  margin-right: 0.5rem;
`;

export const HeaderIcon = styled(Image)`
  opacity: 50%;

  cursor: pointer;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;
