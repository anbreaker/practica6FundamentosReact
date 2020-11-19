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
            In this exercise we use the API of the backend practice in javascript. the
            interaction between Front and Back, is implemented by react with
            react-bootstrap.
          </p>
          <hr className="my-4" />
          <p>It is practice number 6 of the Keepcoding Full Stack Web bootcamp</p>
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
