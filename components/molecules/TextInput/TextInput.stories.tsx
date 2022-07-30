import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  title: 'Components/Molecules/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />;
};
