import { Button, Profile } from 'components';
import * as S from './LoggedInSection.styles';

export function LoggedInSection() {
  const onLogout = () => console.log('logout');

  return (
    <S.Container>
      <Button size="small" variant="blackOutlined" onClick={onLogout}>
        log out
      </Button>
      <Profile width={48} height={48} isLink />
    </S.Container>
  );
}
