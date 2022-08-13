import styled from '@emotion/styled';
import { FormBackground } from 'components';

export const Container = styled(FormBackground)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 2rem 2rem 3rem 2rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  margin-top: 1rem;

  & button:first-of-type {
    margin-bottom: 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
