import { Button, Profile } from 'components';
import * as S from './LoggedInSection.styles';

export function LoggedInSection() {
  return (
    <S.Container>
      <Button width={6} height={3.2} variant="blackOutlined">
        log out
      </Button>
      <Profile width={48} height={48} />
    </S.Container>
  );
}
