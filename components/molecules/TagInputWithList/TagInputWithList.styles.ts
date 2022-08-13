import styled from '@emotion/styled';
import { TagList } from 'components/molecules/TagList';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: fit-content;
  font-size: 0.8rem;
`;

export const SelectedTags = styled(TagList)``;
