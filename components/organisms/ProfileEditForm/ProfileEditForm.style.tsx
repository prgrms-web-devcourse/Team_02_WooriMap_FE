import styled from '@emotion/styled';
import { FormBackground } from 'components';

export const Container = styled(FormBackground)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 5rem;
`;

export const InputsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

  & button:first-of-type {
    margin-right: 1.5rem;
  }
`;
