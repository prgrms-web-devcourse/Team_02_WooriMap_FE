import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageBox } from './ImageBox';

export default {
  title: 'Components/Atoms/ImageBoxViewer',
  component: ImageBox,
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
} as ComponentMeta<typeof ImageBox>;

export const Default: ComponentStory<typeof ImageBox> = (args) => {
  return <ImageBox {...args} />;
};
