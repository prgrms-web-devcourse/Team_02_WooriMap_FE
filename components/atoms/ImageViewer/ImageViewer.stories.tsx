import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageViewer } from './ImageViewer';

export default {
  title: 'Components/Atoms/ImageViewer',
  component: ImageViewer,
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

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
      ],
    },
  },
} as ComponentMeta<typeof ImageViewer>;

export const Default: ComponentStory<typeof ImageViewer> = (args) => {
  return <ImageViewer {...args} />;
};
