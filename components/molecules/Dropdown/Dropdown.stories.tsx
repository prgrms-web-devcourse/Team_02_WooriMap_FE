import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components';
import { Dropdown, DropdownItem } from './Dropdown';

export default {
  title: 'Components/Molecules/Dropdown',
} as ComponentMeta<typeof Dropdown>;

export const Default: ComponentStory<typeof Dropdown> = () => (
  <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
    <Dropdown
      trigger={
        <Button
          size="medium"
          type="button"
          onClick={() => {
            console.log('clicked');
          }}
        >
          클릭
        </Button>
      }
    >
      <DropdownItem>테스트</DropdownItem>
      <DropdownItem>테스트</DropdownItem>
      <DropdownItem>테스트</DropdownItem>
      <DropdownItem>테스트</DropdownItem>
      <DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </DropdownItem>
      <DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </DropdownItem>
      <DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </DropdownItem>
      <DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </DropdownItem>
    </Dropdown>
  </div>
);
