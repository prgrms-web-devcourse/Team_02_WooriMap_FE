import { SignUpTemplate } from 'components';
import withNoAuth from 'hocs/withNoAuthRoute';

function SignUp() {
  return <SignUpTemplate />;
}

export default withNoAuth(SignUp);
