import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAxiosInstance } from 'hooks/useAxiosInstance';
import { useAuthContext } from 'contexts/AuthContext';
import { IUserResponse } from 'types/auth';

function useCheckAuth() {
  const [, setUser] = useAuthContext();
  const instance = useAxiosInstance();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await instance
          .get<IUserResponse>('/members')
          .then((response) => response.data);
        setUser(data);
      } catch {
        router.push('/auth/signin');
      } finally {
        setLoading(false);
      }
    })();
  }, [instance, router, setUser]);

  return loading;
}

export default useCheckAuth;
