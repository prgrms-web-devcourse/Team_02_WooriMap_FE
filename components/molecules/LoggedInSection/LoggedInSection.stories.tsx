import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoggedInSection } from './LoggedInSection';

export default {
  title: 'Components/Molecules/LoggedInSection',
  component: LoggedInSection,
} as ComponentMeta<typeof LoggedInSection>;

export const Default: ComponentStory<typeof LoggedInSection> = () => {
  return <LoggedInSection />;
};
