import React from 'react';
import {UserContext} from './hooks/UserContext';
import {AppRouter} from './router/AppRouter';

export const NodePopApp = () => {
  return (
    <UserContext.Provider>
      <AppRouter />
    </UserContext.Provider>
  );
};
