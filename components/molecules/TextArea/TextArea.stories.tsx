import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  title: 'Components/Molecules/TextArea',
  component: TextArea,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof TextArea>;

export const Default: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};
