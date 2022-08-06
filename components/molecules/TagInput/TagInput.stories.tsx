import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITag } from 'types';
import { TagInput } from './TagInput';

export default {
  title: 'Components/Molecules/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const allTags: ITag[] = [
  { name: '태그1', color: '#59CE8F' },
  { name: '태그2', color: '#9C9EFE' },
  { name: '태그3', color: '#607EAA' },
  { name: '이태그4', color: '#94B49F' },
  { name: '이태그5', color: '#FF8FB1' },
  { name: '이태그da', color: '#7DCE13' },
  { name: '저태그6', color: '#D1512D' },
  { name: '이태그인가4', color: '#94B49F' },
  { name: '이태그맞나5', color: '#FF8FB1' },
  { name: '저태그같다6', color: '#D1512D' },
  { name: '저태그아니다17', color: '#7DCE13' },
  { name: '저태그아닐수도있음', color: '#9C9EFE' },
  { name: '저태그아닌가17', color: '#607EAA' },
];

export const Default: ComponentStory<typeof TagInput> = () => {
  return <TagInput text="태그" key="태그" allTags={allTags} />;
};
