import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITag, HandleChangeTypes } from 'types';
import { TagInputWithList } from './TagInputWithList';

export default {
  title: 'Components/Molecules/TagInputWithList',
  component: TagInputWithList,
} as ComponentMeta<typeof TagInputWithList>;

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

const handleChange: HandleChangeTypes = ({ name, value }) => {
  console.log(`name: ${name}   value: ${value}`);
};

export const Default: ComponentStory<typeof TagInputWithList> = () => {
  return (
    <TagInputWithList
      text="태그"
      key="태그"
      allTags={allTags}
      onClickButton={() => {}}
      handleChange={handleChange}
    />
  );
};
