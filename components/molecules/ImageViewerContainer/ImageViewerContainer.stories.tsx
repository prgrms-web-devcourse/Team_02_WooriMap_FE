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
    src: {
      defaultValue:
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ImageViewerContainer>;

export const Default: ComponentStory<typeof ImageViewerContainer> = () => {
  return <ImageViewerContainer />;
};
