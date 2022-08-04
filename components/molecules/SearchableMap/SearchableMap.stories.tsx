import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchableMap } from './SearchableMap';

export default {
  title: 'Components/Molecules/SearchableMap',
  component: SearchableMap,
} as ComponentMeta<typeof SearchableMap>;

export const Default: ComponentStory<typeof SearchableMap> = () => {
  return <SearchableMap />;
};
