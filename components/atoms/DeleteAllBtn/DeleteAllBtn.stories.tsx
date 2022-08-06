import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeleteAllBtn } from './DeleteAllBtn';

export default {
  title: 'Components/Atoms/DeleteAllBtn',
  component: DeleteAllBtn,
  argTypes: {},
} as ComponentMeta<typeof DeleteAllBtn>;

export const Default: ComponentStory<typeof DeleteAllBtn> = (args) => {
  return <DeleteAllBtn {...args} />;
};
