import React from 'react';

function Login() {
  return (
    <React.Fragment>
      <div className="container p-4 form-sign">
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <h3 className="card-header">Log In:</h3>
                <div className="card-body">
                  {/* <!-- Form --> */}
                  <form id="form-login" method="POST">
                    <legend>Go to user API:</legend>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-input"
                        placeholder="email@mail.com"
                        // onChange="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password "
                        className="form-control form-input"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      id="btn-login"
                      className="btn btn-info btn-block">
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
