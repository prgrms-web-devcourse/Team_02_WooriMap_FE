import { ComponentStory, ComponentMeta } from '@storybook/react';
import Notification from './Notification';

export default {
  title: 'Components/Organisms/Notification',
} as ComponentMeta<typeof Notification>;

export const Default: ComponentStory<typeof Notification> = () => (
  <Notification />
);
