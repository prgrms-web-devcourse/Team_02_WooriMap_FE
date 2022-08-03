import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag name="태그1" color="#FCF8E8" />
      <br />
      <Tag
        tagName="태그2"
        tagColor="#94B49F"
        onDelete={() => alert('태그 지우기 버튼을 클릭하셨군여!!(•̀ᴗ•́)و ̑̑')}
      />
    </>
  );
};

export const randomColor: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag tagName="random tag 1" />
      <Tag
        tagName="random tag 2"
        onDelete={() => alert('태그 지우기 버튼을 클릭하셨군여!!(•̀ᴗ•́)و ̑̑')}
      />
      <Tag
        tagName="random tag 3"
        onDelete={() => alert('태그 지우기 버튼을 클릭하셨군여!!(•̀ᴗ•́)و ̑̑')}
      />
    </>
  );
};
