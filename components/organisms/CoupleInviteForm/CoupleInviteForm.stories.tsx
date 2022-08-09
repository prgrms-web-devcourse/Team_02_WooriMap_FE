import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoupleInviteForm } from './CoupleInviteForm';

export default {
  title: 'Components/Organisms/CoupleInviteForm',
  component: CoupleInviteForm,
  argTypes: {
    code: {
      defaultValue: '12345678',
    },
  },
} as ComponentMeta<typeof CoupleInviteForm>;

export const Default: ComponentStory<typeof CoupleInviteForm> = (args) => {
  return <CoupleInviteForm {...args} />;
};
