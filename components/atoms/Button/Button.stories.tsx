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
    width: {
      defaultValue: 100,
      control: { type: 'range', min: 50, max: 200 },
      options: { range: true },
    },
    height: {
      defaultValue: 100,
      control: { type: 'range', min: 50, max: 200 },
      options: { range: true },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>수정 완료</Button>;
};
