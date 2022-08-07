import styled from '@emotion/styled';
import { TagList } from '../TagList';

export const TagInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
`;

export const SelectedTags = styled(TagList)`
  display: flex;
  align-items: center;
  height: 2.5rem;
`;
