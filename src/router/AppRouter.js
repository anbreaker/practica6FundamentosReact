import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Navigation} from '../components/navigation/Navigation';
import {AdvertIdPage} from '../components/pages/advertsPage/AdvertIdPage';
import {AdvertsListPage} from '../components/pages/advertsPage/AdvertsListPage';
import {FilterAdvertsPage} from '../components/pages/advertsPage/FilterAdvertsPage';
import {HomePage} from '../components/pages/homePage/HomePage';
import {LoginPage} from '../components/pages/loginPage/LoginPage';
import {NewAdvertPage} from '../components/pages/advertsPage/NewAdvertPage';
import {NotFoundPage} from '../components/pages/notFoundPage/NotFoundPage';
import {AuthContextProvider} from '../context/AuthContext';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
  //Sacar y pasar por props el token
  const token = localStorage.getItem('token');

  const [isLogged, setIsLogged] = useState(!!token);

  const onLogin = () => setIsLogged(true);

  const onLogout = () => {
    localStorage.clear();
    setIsLogged(false);
  };

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
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
};
