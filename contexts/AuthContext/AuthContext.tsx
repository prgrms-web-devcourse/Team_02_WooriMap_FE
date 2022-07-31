import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import instance from 'apis/instance';
import { ILoginFormData, IUserResponse, ILoginResponse } from 'types/auth';
import { IApiResponse } from 'types/api';
import { setCookie } from 'utils/cookie';

interface IAuthContext {
  isAuthenticated: false;
  loading: false;
  user: IUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
  login: (data: ILoginFormData) => void;
  logout: () => void;
}

interface IProps {
  children?: React.ReactNode;
}

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext) as IAuthContext;

function AuthProvider({ children }: IProps) {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useMemo(() => !!user, [user]);

  const login = useCallback(async ({ email, password }: ILoginFormData) => {
    try {
      setLoading(true);
      const data = await instance
        .post<IApiResponse<ILoginResponse>>('/signin', {
          email,
          password,
        })
        .then((response) => response.data.data);
      setCookie('accessToken', data.accessToken);
      setCookie('refreshToken', data.refreshToken, { httpOnly: true });
      setUser(() => data.member);
    } catch (error) {
      throw new Error('error occurred at login.');
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await instance.post('/logout');
    } catch (error) {
      throw new Error('error occurred at logout.');
    } finally {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    // TODO: connect api after backend is ready
    (async () => {
      try {
        setLoading(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({ user, setUser, isAuthenticated, loading, login, logout }),
        [isAuthenticated, loading, login, logout, user],
      )}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;