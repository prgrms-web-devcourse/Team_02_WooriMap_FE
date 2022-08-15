import styled from '@emotion/styled';
import { Button } from 'components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 65rem;
  height: 40rem;
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;
  height: 100%;
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 0 2rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const ContentSection = styled.div`
  width: 100%;

  padding: 3rem 2rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  > button {
    opacity: 70%;

    transition: ${({ theme }) => theme.opacityTransition};

    :hover {
      opacity: 90%;
    }
  }
`;

export const CancelButton = styled(Button)`
  width: fit-content;
  height: fit-content;

  border: none;

  color: white;
  background-color: #ffffff00;

  font-size: 0.8rem;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 26rem;
  height: 14rem;
  padding: 1rem;
  background-color: #ffe8e8;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0rem;

  font-family: 'Noto Serif KR', serif;
  font-size: 1.5rem;
  font-weight: 900;
`;

export const ModalContent = styled.div`
  font-size: 0.8rem;
  line-height: 1.7rem;

  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const ModalOptions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  padding: 0.5rem 0rem;
`;

export const ModalOption = styled(Button)`
  border: none;
`;
