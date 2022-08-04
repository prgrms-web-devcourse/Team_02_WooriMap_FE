import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagList } from './TagList';

export default {
  title: 'Components/Molecules/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

const sampleInput1 = {
  tagList: [
    { name: '바다', color: '#0096FF' },
    { name: '산', color: '#2B7A0B' },
    { name: '들', color: '#7DCE13' },
  ],
};

const sampleInput2 = {
  tagList: [
    { name: '벨벳', color: '#B93160', deletable: true },
    { name: '오렌지', color: '#EF5B0C', deletable: true },
    { name: '복숭아', color: '#FFF9CA', deletable: true },
  ],
};

const sampleInput3 = {
  tagList: [
    { tagName: 'randomTag 1', deletable: false },
    { tagName: 'randomTag 2', deletable: false },
    { tagName: 'randomTag 3', deletable: true },
  ],
};

export const Default: ComponentStory<typeof TagList> = () => {
  return (
    <>
      <TagList tagList={sampleInput1.tagList} />
      <TagList tagList={sampleInput2.tagList} />
      <TagList tagList={sampleInput3.tagList} />
    </>
  );
};
