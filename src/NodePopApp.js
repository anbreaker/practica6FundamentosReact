import React, {useState} from 'react';
import {UserContext} from './hooks/UserContext';
import {AppRouter} from './router/AppRouter';

export const NodePopApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AppRouter />
    </UserContext.Provider>
  );
};
