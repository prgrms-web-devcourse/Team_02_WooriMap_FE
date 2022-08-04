import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserProfile } from './UserProfile';

export default {
  title: 'Components/Organisms/UserProfile',
  component: UserProfile,
  argTypes: {
    isCouple: {
      defaultValue: true,
      control: { type: 'radio' },
      options: [true, false],
    },
    nickName: {
      defaultValue: 'UserName',
    },
    coupleNickName: {
      defaultValue: 'CoupleName',
    },
    coupleStartingDate: {
      defaultValue: '2022-03-21',
    },
  },
} as ComponentMeta<typeof UserProfile>;

export const Default: ComponentStory<typeof UserProfile> = (args) => {
  return <UserProfile {...args} />;
};
