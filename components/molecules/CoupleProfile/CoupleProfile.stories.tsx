import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoupleProfile } from './CoupleProfile';

export default {
  title: 'Components/Molecules/CoupleProfile',
  component: CoupleProfile,
  argTypes: {
    userName: {
      defaultValue: 'userName',
      control: { type: 'text' },
      options: { text: true },
    },
  },
} as ComponentMeta<typeof CoupleProfile>;

export const Default: ComponentStory<typeof CoupleProfile> = (args) => {
  return <CoupleProfile {...args} />;
};
