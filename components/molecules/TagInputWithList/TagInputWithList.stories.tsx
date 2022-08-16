import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HandleChangeTypes } from 'types';
import { TagInputWithList } from './TagInputWithList';

export default {
  title: 'Components/Molecules/TagInputWithList',
  component: TagInputWithList,
} as ComponentMeta<typeof TagInputWithList>;

const handleChange: HandleChangeTypes = ({ name, value }) => {
  console.log(`name: ${name}   value: ${value}`);
};

export const Default: ComponentStory<typeof TagInputWithList> = () => {
  return (
    <TagInputWithList
      onKeyPress={() => {}}
      text="태그"
      key="태그"
      onClickButton={() => {}}
      handleChange={handleChange}
    />
  );
};
