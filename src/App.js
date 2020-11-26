import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewAdvertPage from './components/pages/NewAdvertPage';
import AdsPage from './components/pages/AdsPage';
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
          <Route path="/adverts" exact>
            <AdsPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/404" exact>
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
