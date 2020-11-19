import React from 'react';

function Navigation() {
  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Practice 5
          </a>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Menu
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">
                Home
              </a>
              <a className="dropdown-item" href="/login">
                Log In
              </a>
              <a className="dropdown-item" href="nodepop-private">
                User Session
              </a>
              <a className="dropdown-item" href="logout">
                Log Out
              </a>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Log In<span className="sr-only"></span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="nodepop-private">
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
