import React, {useState} from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false);

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);

    fetch('http://localhost:3001/api/loginJWT', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.auth) {
          localStorage.setItem('token', response.tokenJWT);
          window.location.href = '/adverts';
        } else {
          setShowError(true);
        }
      });
  }

  return (
    <React.Fragment>
      <Container className="p-4 form-sign">
        <Jumbotron>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <h3 className="card-header">Log In:</h3>
                <div className="card-body">
                  {/* <!-- Form --> */}
                  <form onSubmit={handleSubmit} id="form-login" method="POST">
                    <legend>Go to user API:</legend>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-input"
                        placeholder="email@mail.com"
                        onChange={onChangeEmail}
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
                        onFocus={() => setShowError(false)}
                        onChange={(ev) => setPassword(ev.target.value)}
                      />
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                        disabled=""
                      />
                      <label className="custom-control-label" for="customCheck2">
                        Remember This.
                      </label>
                    </div>
                    <Button
                      type="submit"
                      id="btn-login"
                      className="btn btn-info btn-block mt-2">
                      Log In
                    </Button>
                  </form>
                  {showError && (
                    <div className="text-center text-danger mt-2">
                      Invalid Credentials
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default Login;
