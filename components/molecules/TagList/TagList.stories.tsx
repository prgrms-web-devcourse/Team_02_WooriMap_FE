import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagList from './TagList';

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
  deletable: true,
};

const sampleInput2 = {
  tagList: [
    { tagName: '벨벳', tagColor: '#B93160' },
    { tagName: '오렌지', tagColor: '#EF5B0C' },
    { tagName: '복숭아', tagColor: '#FFF9CA' },
  ],
  deletable: false,
};

export const Default: ComponentStory<typeof TagList> = () => {
  return (
    <>
      <TagList
        tagList={sampleInput1.tagList}
        deletable={sampleInput1.deletable}
      />
      <TagList
        tagList={sampleInput2.tagList}
        deletable={sampleInput2.deletable}
      />
    </>
  );
};
