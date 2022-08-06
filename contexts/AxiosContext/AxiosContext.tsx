import React, { createContext, useContext, useMemo } from 'react';
import { useAxiosInstance } from 'hooks';
import { AxiosInstance } from 'axios';

interface IProps {
  children?: React.ReactNode;
}

const AxiosContext = createContext<AxiosInstance | null>(null);

export const useAxiosContext = () => useContext(AxiosContext) as AxiosInstance;

function AxiosProvider({ children }: IProps) {
  const instance = useAxiosInstance();
  return (
    <AxiosContext.Provider value={useMemo(() => instance, [instance])}>
      {children}
    </AxiosContext.Provider>
  );
}

export default AxiosProvider;
