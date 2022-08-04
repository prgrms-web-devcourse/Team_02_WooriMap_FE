import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagList } from './TagList';

export default {
  title: 'Components/Molecules/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

const sampleInput1 = {
  tagList: [
    { tagName: '바다', tagColor: '#0096FF' },
    { tagName: '산', tagColor: '#2B7A0B' },
    { tagName: '들', tagColor: '#7DCE13' },
  ],
};

const sampleInput2 = {
  tagList: [
    { tagName: '벨벳', tagColor: '#B93160', deletable: true },
    { tagName: '오렌지', tagColor: '#EF5B0C', deletable: true },
    { tagName: '복숭아', tagColor: '#FFF9CA', deletable: true },
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
