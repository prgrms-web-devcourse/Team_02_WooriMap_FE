import { Button } from 'components';
import { Map } from 'components/atoms/Map';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  border-top: 2px solid black;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const TitleLine = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
`;

export const Date = styled.h6`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const PostControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditPostButton = styled(Button)`
  border-radius: 1.5rem;
  font-size: 0.9rem;
`;

export const DeletePostLink = styled.a`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: right;
`;

export const PostTags = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin: 1rem 0;
  overflow: auto;
`;

export const PostContent = styled.div`
  margin: 1rem 0;
  font-size: 1.25rem;
`;

export const PostLocation = styled(Map)`
  border-radius: 1rem;
`;
