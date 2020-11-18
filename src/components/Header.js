import React from 'react';

function Header() {
  return (
    <React.Fragment>
      <div className="container" id="main">
        <div className="header-nav"></div>
      </div>
      <div className="container p-4 form-sign">
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            In this exercise we created an API, Multilanguaje, Cookies, on backend with
            javascript.
          </p>
          <hr className="my-4" />
          <p>It is practice number 5 of the Keepcoding Full Stack Web bootcamp</p>
          <div className="text-center">
            <a className="btn btn-info btn-lg" href="login" role="button">
              Go to Log In!
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
