import { ComponentStory } from '@storybook/react';
import { MainSearchBar } from './MainSearchBar';

export default {
  title: 'Components/Molecules/MainSearchBar',
  component: MainSearchBar,
  argTypes: {
    handlePostFilter: {
      defaultValue: () => {},
    },
  },
};

export const Default: ComponentStory<typeof MainSearchBar> = (args) => {
  return <MainSearchBar {...args} />;
};
