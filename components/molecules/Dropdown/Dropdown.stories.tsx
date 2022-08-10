import { Button } from 'components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from './Dropdown';
import * as S from './Dropdown.styles';

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
      <S.DropdownItem>테스트</S.DropdownItem>
      <S.DropdownItem>테스트</S.DropdownItem>
      <S.DropdownItem>테스트</S.DropdownItem>
      <S.DropdownItem>테스트</S.DropdownItem>
      <S.DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </S.DropdownItem>
      <S.DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </S.DropdownItem>
      <S.DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </S.DropdownItem>
      <S.DropdownItem>
        테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
      </S.DropdownItem>
    </Dropdown>
  </div>
);
