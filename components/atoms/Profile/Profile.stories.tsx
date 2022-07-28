import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from './Profile';

export default {
  title: 'Components/Atoms/Profile',
  component: Profile,

  argTypes: {
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
    path: {
      defaultValue: null,
      control: { type: 'text' },
      options: { text: true },
    },
    isLink: { defaultValue: false, control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Profile>;

export const Default: ComponentStory<typeof Profile> = (args) => {
  return <Profile {...args} />;
};
