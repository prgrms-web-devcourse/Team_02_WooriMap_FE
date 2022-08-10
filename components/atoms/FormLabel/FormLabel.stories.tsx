import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormLabel from './FormLabel';

export default {
  title: 'Components/Atoms/FormLabel',
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>;

export const Default: ComponentStory<typeof FormLabel> = () => {
  return <FormLabel label="FormLabel" />;
};
