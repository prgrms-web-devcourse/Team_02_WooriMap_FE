import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import TextInput from './TextInput';

export default {
  title: 'Components/Molecules/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Wrapper = styled.div`
  width: 366px;
`;

export const Default: ComponentStory<typeof TextInput> = (args) => {
  return (
    <Wrapper>
      <TextInput {...args} />
    </Wrapper>
  );
};
