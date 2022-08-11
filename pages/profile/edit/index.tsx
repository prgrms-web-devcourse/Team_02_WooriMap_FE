import { withRouter } from 'next/router';
import type { Router } from 'next/router';
import { ProfileTemplate, ProfileEditForm } from 'components';

type PropsWithRouter = {
  router: Router;
};

function ProfileEdit({ router: { query } }: PropsWithRouter) {
  const { isCouple } = query;

  console.log(isCouple);

  return (
    <ProfileTemplate>
      <ProfileEditForm />
    </ProfileTemplate>
  );
}

export default withRouter(ProfileEdit);
