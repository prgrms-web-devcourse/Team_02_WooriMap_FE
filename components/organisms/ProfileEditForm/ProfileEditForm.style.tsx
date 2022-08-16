import styled from '@emotion/styled';
import { Button, FormBackground } from 'components';

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
  gap: 1rem;

  > button {
    flex-grow: 1;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    text-shadow: none;
    box-shadow: ${({ theme }) => theme.boxShadow.atom};

    opacity: 70%;
    transition: ${({ theme }) => theme.opacityTransition};

    :hover {
      opacity: 100%;
    }
  }
`;

export const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.whiteTransparent};
`;
export const ConfirmButton = styled(Button)`
  background: linear-gradient(to top right, #ffcfcf, #ff8299);
`;
