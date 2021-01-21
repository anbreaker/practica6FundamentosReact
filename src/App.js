import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {HomePage} from './components/pages/HomePage';
import {LoginPage} from './components/pages/LoginPage';
import {AdvertIdPage} from './components/pages/AdvertIdPage';
import {AdvertsListPage} from './components/pages/AdvertsListPage';
import {NewAdvertPage} from './components/pages/NewAdvertPage';
import {FilterAdvertsPage} from './components/pages/FilterAdvertsPage';
import {NotFoundPage} from './components/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/filter">
            <FilterAdvertsPage />
          </Route>
          <Route exact path="/new-advert">
            <NewAdvertPage />
          </Route>
          <Route exact path="/adverts">
            <AdvertsListPage />
          </Route>
          <Route exact path="/advert/:id">
            <AdvertIdPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
