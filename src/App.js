import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewAdvertPage from './components/pages/NewAdvertPage';
import AdsPage from './components/pages/AdsPage';
import FilterAdverts from './components/pages/FilterAdverts';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/filter">
            <FilterAdverts />
          </Route>
          <Route path="/new-advert">
            <NewAdvertPage />
          </Route>
          <Route path="/ads">
            <AdsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
