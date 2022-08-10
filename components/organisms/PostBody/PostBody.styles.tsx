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
  font-size: 60px;
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
  width: 166px;
  height: 48px;
  border-radius: 8px;
  font-size: 20px;
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
  font-size: 20px;
  line-height: 1.7rem;
`;

export const PostLocation = styled(Map)`
  border-radius: 1rem;
`;
