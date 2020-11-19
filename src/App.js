import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewAdvertPage from './components/pages/NewAdvertPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/new-advert">
            <NewAdvertPage />
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
