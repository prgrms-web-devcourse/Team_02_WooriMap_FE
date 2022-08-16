import { Button } from 'components';
import { Map } from 'components/atoms/Map';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  position: relative;

  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  width: 16rem;
  height: 1.6rem;

  font-family: 'Noto Serif KR', serif;
  font-size: 1.5rem;
  font-weight: 900;
  text-overflow: ellipsis;

  overflow: hidden;
  white-space: nowrap;
`;

export const PostTags = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  overflow: auto;
`;

export const Date = styled.h6`
  opacity: 30%;
  color: ${({ theme }) => theme.colors.black};

  font-size: 0.8rem;
  font-weight: 500;
`;

export const PostControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: absolute;
  top: 0;
  right: 0;
`;

export const EditPostButton = styled(Button)`
  width: 7rem;
  height: 2.2rem;

  opacity: 70%;

  border: none;
  border-radius: 1.5rem;

  font-size: 1rem;
  text-shadow: none;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;

export const DeletePostButton = styled(Button)`
  width: fit-content;

  position: relative;
  top: -0.5rem;

  border: none;

  opacity: 30%;
  color: ${({ theme }) => theme.colors.black};
  background-color: #ffffff00;

  font-size: 0.7rem;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 70%;
  }
`;

export const PostContent = styled.div`
  flex-grow: 1;

  font-size: 0.8rem;
  line-height: 1.7rem;

  white-space: pre-wrap;
  word-wrap: break-word;

  overflow: auto;
`;

export const PostLocation = styled(Map)`
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 25rem;
  height: 18rem;
  padding: 2rem 1rem;
  border-radius: 1rem;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.alert};

  font-family: 'Noto Sans KR', serif;
  font-size: 1.2rem;
  font-weight: 700;

  opacity: 70%;
`;

export const ModalContent = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;

  white-space: pre-wrap;
  word-wrap: break-word;

  text-align: center;
`;

export const ModalOptions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  padding: 0.5rem 0rem;

  > button {
    width: 7rem;
    height: 3rem;

    border: none;
    border-radius: 0.5rem;

    box-shadow: ${({ theme }) => theme.boxShadow.atom};

    font-size: 0.8rem;
    line-height: 3rem;
    text-shadow: none;

    opacity: 50%;
    transition: ${({ theme }) => theme.opacityTransition};
    :hover {
      opacity: 80%;
    }
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.alert};
  color: ${({ theme }) => theme.colors.white};
`;

export const CancelButton = styled(Button)``;
