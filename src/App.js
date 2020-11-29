import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AdvertIdPage from './components/pages/AdvertIdPage';
import AdvertsListPage from './components/pages/AdvertsListPage';
import NewAdvertPage from './components/pages/NewAdvertPage';
import ChangeAdvertPage from './components/pages/ChangeAdvertPage';
import FilterAdvertsPage from './components/pages/FilterAdvertsPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/filter" exact>
            <FilterAdvertsPage />
          </Route>
          <Route path="/new-advert" exact>
            <NewAdvertPage />
          </Route>
          <Route path="/change-advert/:id" exact>
            <ChangeAdvertPage />
          </Route>
          <Route path="/adverts" exact>
            <AdvertsListPage />
          </Route>
          <Route path="/advert/:id" exact>
            <AdvertIdPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
          {/* <Route path="/404" exact>
            <NotFoundPage />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
