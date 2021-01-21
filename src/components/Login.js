import React, {useState} from 'react';
import {Container, Form, Jumbotron, Button} from 'react-bootstrap';

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false);
  // const [rememberMail, setRememberMail] = useState(true);

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  // const userSession = sessionStorage.getItem('email');
  // console.log(userSession);
  // if (userSession !== null) {
  //   console.log(userSession);
  // }

  // function remberEmail() {
  //   setRememberMail(true);
  //   console.log();
  // }

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
                  <Form onSubmit={handleSubmit} method="POST">
                    <legend>Go to Adverts:</legend>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-input"
                        placeholder="email@mail.com"
                        onChange={onChangeEmail}
                        // value={userSession || email}
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
                    {/* <Form.Check
                      inline
                      label="Remember This"
                      type="checkbox"
                      id="lifestyle"
                      onClick={remberEmail}
                    /> */}
                    <Button
                      type="submit"
                      id="btn-login"
                      className="btn btn-info btn-block mt-2">
                      Log In
                    </Button>
                  </Form>
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
};
