import {createContext, useContext} from 'react';

export const AuthContext = createContext();

export const GetSessionDetails = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const AuthContextProvider = AuthContext.Provider;
