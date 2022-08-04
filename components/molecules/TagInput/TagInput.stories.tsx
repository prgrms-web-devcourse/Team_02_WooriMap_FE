import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITag } from 'types';
import { TagInput } from './TagInput';

export default {
  title: 'Components/Molecules/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const tagData: ITag[] = [
  { name: '태그1', color: '#59CE8F' },
  { name: '태그2', color: '#9C9EFE' },
  { name: '태그3', color: '#607EAA' },
  { name: '이태그4', color: '#94B49F' },
  { name: '이태그5', color: '#FF8FB1' },
  { name: '저태그6', color: '#D1512D' },
  { name: '저태그17', color: '#7DCE13' },
];

export const Default: ComponentStory<typeof TagInput> = () => {
  return (
    <TagInput
      name="태그"
      text="태그"
      key="태그"
      error=""
      tags={[]}
      tagData={tagData}
    />
  );
};
