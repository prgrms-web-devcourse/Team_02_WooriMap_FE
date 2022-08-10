import { ComponentStory, ComponentMeta } from '@storybook/react';
import arrowRight from 'public/image/arrowRight.svg';
import { CircularIcon } from './CircularIcon';

export default {
  title: 'Components/Atoms/CircularIcon',
  component: CircularIcon,
  argTypes: {
    icon: {
      defaultValue: arrowRight,
      control: {
        disabled: true,
      },
    },
    color: {
      defaultValue: 'rgba(255, 143, 143, 0.5)',
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof CircularIcon>;

export const Default: ComponentStory<typeof CircularIcon> = (args) => {
  return <CircularIcon {...args} />;
};
