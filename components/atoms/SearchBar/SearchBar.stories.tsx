import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './SearchBar';

export default {
  title: 'Components/Atoms/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Default: ComponentStory<typeof SearchBar> = () => {
  return <SearchBar />;
};
