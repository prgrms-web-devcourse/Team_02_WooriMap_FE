import Image from 'next/image';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 2rem;
`;

export const LogoImage = styled(Image)``;

export const FinalValidationError = styled.p`
  display: flex;
  justify-content: center;

  height: 1rem;

  font-size: 1rem;
  font-weight: bold;

  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.alert};
`;
