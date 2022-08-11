import { useEffect, useState } from 'react';
import userState from 'core';
import { IUserProps } from 'types';
import { useAxiosInstance, useRecoilValueAfterMount } from 'hooks';
import { ProfileTemplate, ProfileEditForm } from 'components';
import { getCoupleInfo } from 'apis/couple';

export default function ProfileEdit() {
  const instance = useAxiosInstance();
  const currentUserState = useRecoilValueAfterMount(userState, null);
  const [user, setUser] = useState<IUserProps | null>(null);

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

  if (!currentUserState || !user) return null;

  return (
    <ProfileTemplate>
      <ProfileEditForm user={user} />
    </ProfileTemplate>
  );
}
