import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import './general.css';

export const Navigation = () => {
  const handleLogOut = () => {
    localStorage.clear();
  };

  const isLoggedIn = !!localStorage.getItem('token');

  //No elimina lo de logout del NavBar... Preguntar...
  console.log(isLoggedIn, 'Logueado??');

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
              <Dropdown.Item as={Link} to="/">
                Home
              </Dropdown.Item>

              {isLoggedIn && (
                <Dropdown.Item as={Link} to="/adverts" className="underline">
                  User Session
                </Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item as={Link} to="/filter" className="underline">
                  Filter ads
                </Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item as={Link} to="/new-advert" className="underline">
                  New Advert
                </Dropdown.Item>
              )}
              {!isLoggedIn && (
                <Dropdown.Item as={Link} to="/new-advert" className="underline">
                  Log In
                </Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item
                  as={Link}
                  to="/"
                  className="underline"
                  onClick={handleLogOut}>
                  Log out
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              {!isLoggedIn && (
                <NavLink className="nav-item nav-link decoration" to="/login">
                  Log In<span className="sr-only"></span>
                </NavLink>
              )}

              {isLoggedIn && (
                <NavLink className="nav-item nav-link decoration" to="/adverts">
                  User Session
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink className="nav-item nav-link decoration" to="/filter">
                  Filter Ads
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink className="nav-item nav-link decoration" to="/new-advert">
                  New Advert
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink
                  className="nav-item nav-link decoration"
                  // to="/"
                  to="/adverts"
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
