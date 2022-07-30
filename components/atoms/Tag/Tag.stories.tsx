import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = () => {
  return <Tag>태그 이름</Tag>;
};
