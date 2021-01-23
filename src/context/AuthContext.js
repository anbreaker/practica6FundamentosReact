import {createContext, useContext} from 'react';

export const AuthContext = createContext();

export const getSessionDetails = () => {
  const auth = useContext(auhtContext);
  return auth;
};

export const AuthContextProvider = AuthContext.Provider;
