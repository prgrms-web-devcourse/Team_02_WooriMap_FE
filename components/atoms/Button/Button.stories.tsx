import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'blackOutlined',
      control: { type: 'radio' },
      options: ['black', 'grayOutlined', 'blackOutlined'],
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>수정 완료</Button>;
};
