import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MapSearch } from './MapSearch';

export default {
  title: 'Components/Molecules/MapSearch',
  component: MapSearch,
} as ComponentMeta<typeof MapSearch>;

export const Default: ComponentStory<typeof MapSearch> = () => {
  return <MapSearch />;
};
