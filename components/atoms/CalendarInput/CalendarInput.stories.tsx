import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import { CalendarInput } from './CalendarInput';

export default {
  title: 'Components/Atoms/CalendarInput',
  component: CalendarInput,
  argTypes: {},
} as ComponentMeta<typeof CalendarInput>;

const Wrapper = styled.div`
  width: 366px;
`;

export const Default: ComponentStory<typeof CalendarInput> = (args) => {
  return (
    <Wrapper>
      <CalendarInput {...args} />
    </Wrapper>
  );
};
