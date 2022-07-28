import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GNB } from './GNB';

export default {
  title: 'Components/Molecules/GNB',
  component: GNB,
} as ComponentMeta<typeof GNB>;

export const Default: ComponentStory<typeof GNB> = () => {
  return <GNB />;
};
