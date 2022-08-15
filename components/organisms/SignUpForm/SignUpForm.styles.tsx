import Image from 'next/image';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const LogoImage = styled(Image)``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  width: 100%;
  height: 10rem;

  padding: 2rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;

export const FinalValidationError = styled.p`
  display: flex;
  justify-content: center;

  height: 1rem;

  padding-left: 1rem !important;

  font-size: 1rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.alert};
`;
