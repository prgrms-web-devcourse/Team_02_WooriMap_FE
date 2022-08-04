import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagInput } from './TagInput';

export default {
  title: 'Components/Molecules/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

export const Default: ComponentStory<typeof TagInput> = () => {
  return <TagInput name="태그" text="태그" key="태그" error="" tags={[]} />;
};
