import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag tagName="태그1" tagColor="#FCF8E8" />
      <br />
      <Tag tagName="태그2" tagColor="#94B49F" onDelete={() => {}} />
    </>
  );
};

export const randomColor: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag tagName="random tag 1" />
      <Tag tagName="random tag 2" />
      <Tag tagName="random tag 3" />
    </>
  );
};
