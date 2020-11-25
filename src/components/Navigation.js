import React from 'react';
import {Dropdown} from 'react-bootstrap';

function Navigation() {
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
              <Dropdown.Item href="/ads">User Session</Dropdown.Item>
              <Dropdown.Item href="/login">Log In</Dropdown.Item>
              <Dropdown.Item href="/new-advert">New Advert</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Log In<span className="sr-only"></span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/ads">
                  User Session
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="logout">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
