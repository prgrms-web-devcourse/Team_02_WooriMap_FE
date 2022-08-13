import { AxiosInstance } from 'axios';

import { getCoupleInfo } from 'apis/couple';

interface ICoupleInfo {
  coupleNickName: string;
  startDate: string;
}

export async function handleCoupleInfo({
  instance,
}: {
  instance: AxiosInstance;
}): Promise<ICoupleInfo | null> {
  const response = await getCoupleInfo({
    instance,
  });

  if (response.data) {
    const { data } = response;

    const {
      startDate,
      you: { nickName },
    } = data;

    return {
      startDate,
      coupleNickName: nickName,
    };
  }

  return null;
}
