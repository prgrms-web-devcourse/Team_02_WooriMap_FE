import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageList } from './ImageList';

export default {
  title: 'Components/Molecules/ImageList',
  component: ImageList,
  argTypes: {
    size: {
      defaultValue: 'medium',
      control: { type: 'radio' },
      options: ['medium', 'large'],
    },
    sources: {
      control: { type: 'array' },
      defaultValue: [
        {
          key: '1',
          src: 'https://picsum.photos/200/300',
          isSelected: false,
        },
        {
          key: '2',
          src: 'https://picsum.photos/200/300',
          isSelected: false,
        },
      ],
    },
  },
} as ComponentMeta<typeof ImageList>;

export const Default: ComponentStory<typeof ImageList> = (args) => {
  return <ImageList {...args} />;
};
