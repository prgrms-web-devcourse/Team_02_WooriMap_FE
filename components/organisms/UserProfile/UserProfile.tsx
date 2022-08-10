import { useEffect, useState } from 'react';
import { IUserProfileProps } from 'types/couple';
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
        {...props}
      />
    );
  }

  return (
    <IsNotCoupleProfile isCouple={isCouple} nickName={nickName} {...props} />
  );
}
