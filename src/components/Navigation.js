import React from 'react';
import {Dropdown} from 'react-bootstrap';

function Navigation() {
  function handleLogOut() {
    localStorage.clear();
  }

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Practice 6
          </a>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              {isLoggedIn && <Dropdown.Item href="/ads">User Session</Dropdown.Item>}
              {isLoggedIn && <Dropdown.Item href="/filter">Filter ads</Dropdown.Item>}
              {!isLoggedIn && <Dropdown.Item href="/login">Log In</Dropdown.Item>}
              {isLoggedIn && (
                <Dropdown.Item href="/login" onClick={handleLogOut}>
                  Log Out
                </Dropdown.Item>
              )}
              {isLoggedIn && <Dropdown.Item href="/new-advert">New Advert</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Log In<span className="sr-only"></span>
                  </a>
                </li>
              )}

              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/ads">
                    User Session
                  </a>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/new-advert">
                    New Advert
                  </a>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/filter">
                    Filter Ads
                  </a>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="logout" onClick={handleLogOut}>
                    Log Out
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
