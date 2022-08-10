import userState from 'core';
import { withAuthRoute } from 'hocs';
import { ProfileTemplate, UserProfile } from 'components';
import { useRecoilValueAfterMount } from 'hooks';

function Profile() {
  const user = useRecoilValueAfterMount(userState, null);

  if (!user) return null;

  const { isCouple, nickName, imageUrl } = user;
  return (
    <ProfileTemplate>
      <UserProfile
        isCouple={isCouple}
        nickName={nickName}
        imageUrl={imageUrl}
      />
    </ProfileTemplate>
  );
}

export default withAuthRoute(Profile);
