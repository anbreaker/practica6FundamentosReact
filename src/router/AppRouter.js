import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Navigation} from '../components/Navigation';
import {AdvertIdPage} from '../components/pages/AdvertIdPage';
import {AdvertsListPage} from '../components/pages/AdvertsListPage';
import {FilterAdvertsPage} from '../components/pages/FilterAdvertsPage';
import {HomePage} from '../components/pages/HomePage';
import {LoginPage} from '../components/pages/LoginPage';
import {NewAdvertPage} from '../components/pages/NewAdvertPage';
import {NotFoundPage} from '../components/pages/NotFoundPage';
import {AuthContextProvider} from '../context/AuthContext';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
  const token = localStorage.getItem('token');
  const [isLogged, setIsLogged] = useState(!!token);

  const onLogin = () => setIsLogged(true);
  const onLogout = () => setIsLogged(false);

  return (
    <AuthContextProvider value={{isLogged, onLogin, onLogout}}>
      <Router>
        <div className="container">
          <Navigation />

          <Switch>
            <PrivateRoute exact path="/filter" component={FilterAdvertsPage} />
            <PrivateRoute exact path="/new-advert" component={NewAdvertPage} />
            <PrivateRoute exact path="/adverts" component={AdvertsListPage} />
            <PrivateRoute exact path="/advert/:id" component={AdvertIdPage} />

            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/404" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
};
