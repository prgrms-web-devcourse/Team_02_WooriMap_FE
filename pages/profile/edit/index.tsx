import { withRouter } from 'next/router';
import type { Router } from 'next/router';
import { ProfileTemplate, ProfileEditForm } from 'components';

type PropsWithRouter = {
  router: Router;
};

function ProfileEdit({ router: { query } }: PropsWithRouter) {
  return (
    <ProfileTemplate>
      <ProfileEditForm query={query} />
    </ProfileTemplate>
  );
}

export default withRouter(ProfileEdit);
