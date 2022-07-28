import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from './Profile';

export default {
  title: 'Components/Atoms/Profile',
  component: Profile,

  argTypes: {
    width: {
      defaultValue: '100px',
      control: { type: 'range', min: '0', max: '200' },
    },
    height: {
      defaultValue: '100px',
      control: { type: 'range', min: '0', max: '200' },
    },
    path: {
      defaultValue: '',
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Profile>;

export const Default: ComponentStory<typeof Profile> = (args) => {
  return <Profile {...args} />;
};
