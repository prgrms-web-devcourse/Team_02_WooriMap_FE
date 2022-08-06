import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostWrite } from 'components';

export default {
  title: 'Components/Organisms/PostWrite',
  component: PostWrite,
} as ComponentMeta<typeof PostWrite>;

export const Default: ComponentStory<typeof PostWrite> = () => {
  return <PostWrite />;
};
