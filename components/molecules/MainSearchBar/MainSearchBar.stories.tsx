import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainSearchBar } from './MainSearchBar';

export default {
  title: 'Components/Molecules/MainSearchBar',
  component: MainSearchBar,
};

export const Default: ComponentStory<typeof MainSearchBar> = () => {
  return <MainSearchBar />;
};
