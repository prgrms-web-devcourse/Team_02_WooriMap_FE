import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormControl from './FormControl';

export default {
  title: 'Components/Molecules/FormControl',
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = () => {
  return <FormControl label="FormLabel" input={<input type="text" />} />;
};
