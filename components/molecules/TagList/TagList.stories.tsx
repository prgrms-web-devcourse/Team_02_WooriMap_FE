import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITag } from 'types';
import { TagList } from './TagList';

export default {
  title: 'Components/Molecules/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

const tagList1: ITag[] = [
  { name: '바다', color: '#0096FF' },
  { name: '산', color: '#2B7A0B' },
  { name: '들', color: '#7DCE13' },
];

const tagList2: ITag[] = [
  { name: '벨벳', color: '#B93160', onDelete: () => {} },
  { name: '오렌지', color: '#EF5B0C', onDelete: () => {} },
  { name: '복숭아', color: '#FFF9CA', onDelete: () => {} },
];

export const Default: ComponentStory<typeof TagList> = () => {
  return (
    <>
      <TagList tagList={tagList1} />
      <TagList tagList={tagList2} />
    </>
  );
};
