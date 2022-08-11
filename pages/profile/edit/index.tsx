import { withRouter } from 'next/router';
import type { Router } from 'next/router';
import { ProfileTemplate } from 'components';

type PropsWithRouter = {
  router: Router;
};

function ProfileEdit({ router }: PropsWithRouter) {
  console.log(router.query);
  return (
    <ProfileTemplate>
      <h1>Profile Edit</h1>
    </ProfileTemplate>
  );
}

export default withRouter(ProfileEdit);
