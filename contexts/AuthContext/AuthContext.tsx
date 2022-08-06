import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { IUserResponse } from 'types/auth';
import LocalStorage from 'utils/storage';

type AuthContextReturnTypes = [
  IUserResponse | null,
  (data: IUserResponse | null) => void,
  boolean,
];

interface IProps {
  children?: React.ReactNode;
}

const AuthContext = createContext({});

export const useAuthContext = () =>
  useContext(AuthContext) as AuthContextReturnTypes;

function AuthProvider({ children }: IProps) {
  const [user, handler] = useState<IUserResponse | null>(() => {
    const userData = LocalStorage.getItem<IUserResponse, null>('user', null);
    return userData || null;
  });
  const isAuthenticated = useMemo(() => !!user, [user]);

  const setUser = useCallback((data: IUserResponse | null) => {
    handler(data);
    LocalStorage.setItem('user', data);
  }, []);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => [user, setUser, isAuthenticated],
        [isAuthenticated, setUser, user],
      )}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
