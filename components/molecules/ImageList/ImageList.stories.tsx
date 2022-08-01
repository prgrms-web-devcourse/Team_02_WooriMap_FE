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
      defaultValue: [
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+6.png',
      ],
      control: { type: 'array' },
    },
  },
} as ComponentMeta<typeof ImageList>;

export const Default: ComponentStory<typeof ImageList> = (args) => {
  return <ImageList {...args} />;
};
