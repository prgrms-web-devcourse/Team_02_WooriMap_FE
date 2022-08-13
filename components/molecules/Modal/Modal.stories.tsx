import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from 'components';
import { Modal } from './Modal';

export default {
  title: 'Components/Molecules/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const StyledModal = styled(Modal)`
  width: 280;
  height: 100;
  background-color: #e7bcbc;
`;

export const Default: ComponentStory<typeof Modal> = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <Button
        size="medium"
        onClick={() => {
          setVisible((prev: boolean) => !prev);
        }}
      >
        벝은
      </Button>
      <StyledModal
        isVisible={isVisible}
        onClose={() => {
          setVisible(false);
        }}
      >
        나의 예쁜 저녁 노을
        <Button
          size="xsmall"
          onClick={() => {
            setVisible(false);
          }}
        >
          클릭!
        </Button>
      </StyledModal>
    </div>
  );
};
