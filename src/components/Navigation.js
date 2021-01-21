import React from 'react';
import {NavLink} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

export const Navigation = () => {
  function handleLogOut() {
    localStorage.clear();
  }

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink exact className="navbar-brand" to="/">
            Practice 6
          </NavLink>

          <Dropdown>
            <Dropdown.Toggle className="btn btn-secondary btn-dark" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </Dropdown.Item>
              {isLoggedIn && (
                <Dropdown.Item>
                  <NavLink exact to="/adverts">
                    User Session
                  </NavLink>
                </Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item>
                  <NavLink exact to="/filter">
                    Filter ads
                  </NavLink>
                </Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item>
                  <NavLink exact to="/new-advert">
                    New Advert
                  </NavLink>
                </Dropdown.Item>
              )}
              {!isLoggedIn && (
                <Dropdown.Item>
                  <NavLink exact to="/login">
                    Log In
                  </NavLink>
                </Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item>
                  <NavLink exact to="/" onClick={handleLogOut}>
                    Log out
                  </NavLink>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn && (
                <NavLink exact className="nav-item nav-link" to="/login">
                  Log In<span className="sr-only"></span>
                </NavLink>
              )}

              {isLoggedIn && (
                <NavLink exact className="nav-item nav-link" to="/adverts">
                  User Session
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink exact className="nav-item nav-link" to="/filter">
                  Filter Ads
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink exact className="nav-item nav-link" to="/new-advert">
                  New Advert
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink
                  exact
                  className="nav-item nav-link"
                  to="/"
                  onClick={handleLogOut}>
                  Log Out
                </NavLink>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
