import styled from '@emotion/styled';
import Image from 'next/image';

interface ImageViewerProps {
  width: number;
  height: number;
}

export const Container = styled(Image)<ImageViewerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: 0.313rem;
`;
