import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import { Tag } from './Tag';

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
      <Tag value="태그1" tagColor="#FCF8E8" />
      <Tag value="태그2" tagColor="#94B49F" onDelete={() => alert('clicked')} />
    </Box>
  );
};
