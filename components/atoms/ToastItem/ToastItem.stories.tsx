import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToastItem } from './ToastItem';

export default {
  title: 'Components/Atoms/ToastItem',
  component: ToastItem,
} as ComponentMeta<typeof ToastItem>;

export const Default: ComponentStory<typeof ToastItem> = () => {
  return (
    <ToastItem
      toast={{
        message: '안녕하세요',
        status: 'success',
        duration: 3000,
      }}
      onRemove={() => {}}
    />
  );
};
