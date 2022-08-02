import Image from 'next/image';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 20px;
`;

export const LogoImage = styled(Image)`
  display: none;
`;

export const FinalValidationError = styled.p`
  display: flex;
  justify-content: center;

  font-size: 1rem;
  font-weight: bold;

  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.alert};
`;
