import styled from '@emotion/styled';
import { TagList } from 'components/molecules/TagList';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
`;

export const SelectedTags = styled(TagList)`
  margin: 1rem 0;
`;
