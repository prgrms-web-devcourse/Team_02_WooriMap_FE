import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToastItem } from './ToastItem';

export default {
  title: 'Components/Atoms/ToastItem',
  component: ToastItem,
  argTypes: {
    toast: {
      defaultValue: {
        message: '성공적으로 저장되었습니다.',
        status: 'success',
        duration: 3000,
      },
      control: { type: 'object' },
      options: [
        {
          message: '성공적으로 저장되었습니다.',
          status: 'success',
          duration: 3000,
        },
        {
          message: '실패했습니다.',
          status: 'fail',
          duration: 3000,
        },
      ],
    },
    onRemove: {
      defaultValue: () => {},
      control: { type: 'function' },
      options: [() => {}],
    },
  },
} as ComponentMeta<typeof ToastItem>;

export const Default: ComponentStory<typeof ToastItem> = (args) => {
  return <ToastItem {...args} />;
};
