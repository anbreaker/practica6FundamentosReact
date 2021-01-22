import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, Form, Jumbotron, Button} from 'react-bootstrap';
import {urlBackend} from '../helpers/apiUrls';

export const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false);
  const [rememberMail, setRememberMail] = useState(false);

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);
  const onChangeRemberEmail = (event) => setRememberMail(event.target.checked);

  // console.log(email, password, rememberMail);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${urlBackend}api/loginJWT`, {
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
          history.push('/adverts');
        } else {
          setShowError(true);
        }
      });
  };

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
                        onChange={onChangePassword}
                      />
                    </div>
                    <Form.Check
                      inline
                      label="Remember This"
                      type="checkbox"
                      id="lifestyle"
                      name="checkbox"
                      onChange={onChangeRemberEmail}
                    />
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
