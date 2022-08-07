import { useAuthContext } from 'contexts/AuthContext';
import { useCallback, useEffect } from 'react';
import { useAxiosInstance } from 'hooks';
import api from 'apis/instance';

function Home() {
  const instance = useAxiosInstance();
  const [user] = useAuthContext();

  const onClick = useCallback(async () => {
    try {
      const response = await instance.post('/auth/token');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, [instance]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/fake/cookie');
      console.log(response);
    })();
  }, []);
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
      <button type="button" onClick={onClick}>
        클릭
      </button>
    </div>
  );
}
export default Home;
