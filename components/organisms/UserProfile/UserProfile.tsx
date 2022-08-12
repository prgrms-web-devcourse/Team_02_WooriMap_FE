import { useEffect, useState } from 'react';
import { IUserProfileProps } from 'types';
import { useAxiosInstance } from 'hooks';
import { getCoupleInfo } from 'apis/couple';
import { IsCoupleProfile } from './IsCoupleProfile';
import { IsNotCoupleProfile } from './IsNotCoupleProfile';

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

  console.log(isCouple);

  useEffect(() => {
    if (isCouple) {
      (async () => {
        const {
          data: {
            startDate,
            you: { nickName: coupleNickName },
          },
        } = await getCoupleInfo({ instance });

        setCoupleInfo({
          coupleNickName,
          startDate,
        });
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
