import { Button, Profile } from 'components';
import * as S from './LoggedInSection.styles';

export function LoggedInSection() {
  const onLogout = () => console.log('logout');

  return (
    <S.Container>
      <Button width={6} height={3.2} variant="blackOutlined" onClick={onLogout}>
        log out
      </Button>
      <Profile width={48} height={48} />
    </S.Container>
  );
}
