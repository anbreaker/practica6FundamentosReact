import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Navigation} from '../components/Navigation';
import {AdvertIdPage} from '../components/pages/AdvertIdPage';
import {AdvertsListPage} from '../components/pages/AdvertsListPage';
import {FilterAdvertsPage} from '../components/pages/FilterAdvertsPage';
import {HomePage} from '../components/pages/HomePage';
import {LoginPage} from '../components/pages/LoginPage';
import {NewAdvertPage} from '../components/pages/NewAdvertPage';
import {NotFoundPage} from '../components/pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/filter" component={FilterAdvertsPage} />
          <Route exact path="/new-advert" component={NewAdvertPage} />
          <Route exact path="/adverts" component={AdvertsListPage} />
          <Route exact path="/advert/:id" component={AdvertIdPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
