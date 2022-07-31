import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tag from './Tag';

const Box = styled.div`
  display: inline-flex;
  width: 300px;
`;

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = () => {
  return (
    <Box>
      <Tag name="태그1" />
      <Tag name="태그2" onDelete={() => alert('clicked')} />
    </Box>
  );
};
