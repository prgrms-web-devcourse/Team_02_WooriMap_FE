import { useEffect } from 'react';
import { useAuthContext } from 'contexts/AuthContext';
import { useRouter } from 'next/router';

function useCheckCouple() {
  const [user] = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (!user?.isCouple) {
      // TODO: 나중에 프로필 페이지 또는 커플 초대 페이지로 보내기
      router.push('/signin');
    }
  }, [router, user?.isCouple]);
}

export default useCheckCouple;
