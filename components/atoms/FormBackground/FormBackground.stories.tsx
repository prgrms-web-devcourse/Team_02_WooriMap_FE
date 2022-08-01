import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormBackground from './FormBackground';

export default {
  title: 'Components/Atoms/FormBackground',
  component: FormBackground,
} as ComponentMeta<typeof FormBackground>;

export const Default: ComponentStory<typeof FormBackground> = () => {
  return <FormBackground>FormBackground</FormBackground>;
};
