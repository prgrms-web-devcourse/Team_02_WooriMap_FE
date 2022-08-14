import { SignUpTemplate } from 'components';
<<<<<<< HEAD
import { withSigninSignout } from 'hocs';
=======
import { withSignInSignOut } from 'hocs';
>>>>>>> caf38be (feat: 로그인 회원가입 회원이면 접근 하지 못하게 변경)

function SignUp() {
  return <SignUpTemplate />;
}

<<<<<<< HEAD
export default withSigninSignout(SignUp);
=======
export default withSignInSignOut(SignUp);
>>>>>>> caf38be (feat: 로그인 회원가입 회원이면 접근 하지 못하게 변경)
