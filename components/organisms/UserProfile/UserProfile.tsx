import { useEffect, useState } from 'react';
import { IUserProfileProps } from 'types';
import { useAxiosInstance } from 'hooks';
import { IsCoupleProfile } from './IsCoupleProfile';
import { IsNotCoupleProfile } from './IsNotCoupleProfile';
import { handleCoupleInfo } from './helper';

interface ICoupleInfo {
  coupleNickName: string;
  startDate: string;
}

export function UserProfile({
  isCouple,
  nickName,
  imageUrl,
  email,
  ...props
}: IUserProfileProps) {
  const [coupleInfo, setCoupleInfo] = useState<ICoupleInfo>({
    coupleNickName: '',
    startDate: '',
  });
  const instance = useAxiosInstance();

  useEffect(() => {
    if (isCouple) {
      (async () => {
        const response = await handleCoupleInfo({ instance });

        if (response) {
          setCoupleInfo({ ...response });
        } else {
        }
      })();
    }
  }, [instance]);

  if (isCouple) {
    const { coupleNickName, startDate } = coupleInfo;
    return (
      <IsCoupleProfile
        isCouple={isCouple}
        nickName={nickName}
        coupleNickName={coupleNickName}
        startDate={startDate}
        imageUrl={imageUrl}
        email={email}
        {...props}
      />
    );
  }

  return (
    <IsNotCoupleProfile
      imageUrl={imageUrl}
      isCouple={isCouple}
      nickName={nickName}
      {...props}
    />
  );
}
