import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './SearchBar';

export default {
  title: 'Components/Atoms/SearchBar',
  component: SearchBar,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof SearchBar>;

export const Default: ComponentStory<typeof SearchBar> = (args) => {
  return <SearchBar {...args} />;
};
