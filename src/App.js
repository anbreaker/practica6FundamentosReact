import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewAdvertPage from './components/pages/NewAdvertPage';
import AdsPage from './components/pages/AdsPage';
import FilterAdvertsPage from './components/pages/FilterAdvertsPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/filter">
            <FilterAdvertsPage />
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
