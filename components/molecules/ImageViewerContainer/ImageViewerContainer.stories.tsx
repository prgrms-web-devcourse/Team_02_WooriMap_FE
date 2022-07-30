import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageViewerContainer } from './ImageViewerContainer';

export default {
  title: 'Components/Molecules/ImageViewerContainer',
  component: ImageViewerContainer,
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
} as ComponentMeta<typeof ImageViewerContainer>;

export const Default: ComponentStory<typeof ImageViewerContainer> = (args) => {
  return <ImageViewerContainer {...args} />;
};
