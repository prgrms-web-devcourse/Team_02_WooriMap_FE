import { withSigninSignout } from 'hocs';
import { SignUpTemplate } from 'components';

function SignUp() {
  return <SignUpTemplate />;
}

export default withSigninSignout(SignUp);
