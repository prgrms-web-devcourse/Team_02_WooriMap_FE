import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
  title: 'Components/Molecules/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Default: ComponentStory<typeof NavBar> = () => {
  return <NavBar />;
};
