import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoupleProfile } from './CoupleProfile';

export default {
  title: 'Components/Molecules/CoupleProfile',
  component: CoupleProfile,
  argTypes: {
    nickname: {
      defaultValue: 'nickname',
      control: { type: 'text' },
    },
    coupleNickname: {
      defaultValue: 'coupleNick',
      control: { type: 'text' },
    },
    coupleStartingDate: {
      defaultValue: '2022-03-18',
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof CoupleProfile>;

export const Default: ComponentStory<typeof CoupleProfile> = (args) => {
  return <CoupleProfile {...args} />;
};
