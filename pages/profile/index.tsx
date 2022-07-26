import userState from 'core';
import { ProfileTemplate, UserProfile } from 'components';
import { useRecoilValueAfterMount } from 'hooks';
import { withAuthRoute } from 'hocs';

function Profile() {
  const user = useRecoilValueAfterMount(userState, null);

  if (!user) return null;

  const { isCouple, nickName, imageUrl, email } = user;

  return (
    <ProfileTemplate>
      <UserProfile
        isCouple={isCouple}
        nickName={nickName}
        imageUrl={imageUrl}
        email={email}
      />
    </ProfileTemplate>
  );
}

export default withAuthRoute(Profile);
