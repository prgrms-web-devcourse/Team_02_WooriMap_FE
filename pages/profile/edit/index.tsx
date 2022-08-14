import { useEffect, useState } from 'react';
import userState from 'core';
import { IUserProps } from 'types';
import { useAxiosInstance, useRecoilValueAfterMount } from 'hooks';
import { ProfileTemplate, ProfileEditForm } from 'components';
import { withAuthRoute } from 'hocs';
import { getCoupleInfo } from 'apis/couple';

function ProfileEdit() {
  const instance = useAxiosInstance();
  const currentUserState = useRecoilValueAfterMount(userState, null);
  const [user, setUser] = useState<IUserProps | null>(null);

  /**
   * 유저 정보를 가져옵니다
   *
   * 초반에는 리코일이 null 이기 때문에 useEffect로 리코일 state가 처리 되었을 때, fetch합니다.
   */
  useEffect(() => {
    if (currentUserState) {
      // 사용자가 커플일 때
      if (currentUserState.isCouple) {
        (async () => {
          const {
            data: {
              startDate,
              me: { imageUrl, nickName },
            },
          } = await getCoupleInfo({
            instance,
          });

          setUser((prev) => ({
            ...prev,
            isCouple: true,
            imageUrl,
            nickName,
            startDate,
          }));
        })();
      } else {
        // 사용자가 솔로일 때
        setUser((prev) => ({
          ...prev,
          isCouple: false,
          imageUrl: currentUserState.imageUrl as string,
          nickName: currentUserState.nickName as string,
        }));
      }
    }
  }, [currentUserState, instance]);

  // 모든 데이터의 상태가 처리되지 않았다면 그냥 빈 화면 보여줍니다. (추후에, UI 개선이 가능할 것 같습니다.)
  if (!currentUserState || !user) return null;

  return (
    <ProfileTemplate>
      <ProfileEditForm user={user} userRecoilState={currentUserState} />
    </ProfileTemplate>
  );
}

export default withAuthRoute(ProfileEdit);
