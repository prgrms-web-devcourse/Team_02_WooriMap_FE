import React, { createContext, useContext, useMemo, useState } from 'react';
import { IUserResponse } from 'types/auth';

type AuthContextReturnTypes = [
  IUserResponse | null,
  React.Dispatch<React.SetStateAction<IUserResponse | null>>,
  boolean,
];

interface IProps {
  children?: React.ReactNode;
}

const AuthContext = createContext({});

export const useAuthContext = () =>
  useContext(AuthContext) as AuthContextReturnTypes;

function AuthProvider({ children }: IProps) {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const isAuthenticated = useMemo(() => !!user, [user]);

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
