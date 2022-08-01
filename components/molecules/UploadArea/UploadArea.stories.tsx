import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UploadArea } from './UploadArea';

export default {
  title: 'Components/Molecules/UploadArea',
  component: UploadArea,
} as ComponentMeta<typeof UploadArea>;

export const Default: ComponentStory<typeof UploadArea> = (args) => {
  return <UploadArea {...args} />;
};
