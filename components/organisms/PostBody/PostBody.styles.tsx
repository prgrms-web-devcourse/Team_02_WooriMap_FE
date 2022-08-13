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

export const Header = styled.div``;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-family: 'Noto Serif KR', serif;
  font-size: 5rem;
  font-weight: 900;
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

  font-size: 1.2rem;
  font-weight: 500;
`;

export const PostControl = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;

  position: absolute;
  top: 0;
  right: 0;
`;

export const EditPostButton = styled(Button)`
  width: 10rem;
  height: 3rem;

  opacity: 70%;

  border-radius: 1.5rem;

  font-size: 1.2rem;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;

export const DeletePostButton = styled(Button)`
  padding-bottom: 0.3rem;

  border: none;

  opacity: 30%;
  color: ${({ theme }) => theme.colors.black};

  font-size: 1.1rem;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 70%;
  }
`;

export const PostContent = styled.div`
  flex-grow: 1;

  font-size: 1.2rem;
  line-height: 1.7rem;

  overflow: auto;
`;

export const PostLocation = styled(Map)`
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};
`;
