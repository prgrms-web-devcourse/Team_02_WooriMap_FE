import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MapMarkerOverlay } from './MapMarkerOverlay';

export default {
  title: 'Components/molecules/MapMarkerOverlay',
  componenet: MapMarkerOverlay,
  argTypes: {
    postId: {
      defaultValue: '1',
      control: {
        type: 'text',
      },
    },
    postThumbnailPath: {
      defaultValue:
        'https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png',
      control: {
        type: 'text',
      },
    },
    title: {
      defaultValue: '서울에서의 추억',
      control: {
        type: 'text',
      },
    },
    createDate: {
      defaultValue: '0000-00-00',
      control: {
        type: 'text',
      },
    },
    latitude: {
      defaultValue: '37.56667',
      control: {
        type: 'text',
      },
    },
    longitude: {
      defaultValue: '126.97806',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof MapMarkerOverlay>;

export const Default: ComponentStory<typeof MapMarkerOverlay> = (args) => {
  return <MapMarkerOverlay {...args} />;
};
