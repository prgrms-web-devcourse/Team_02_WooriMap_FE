import { SignUpTemplate } from 'components';
import { withSigninSignout } from 'hocs';

function SignUp() {
  return <SignUpTemplate />;
}

export default withSigninSignout(SignUp);
