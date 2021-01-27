import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Form, Jumbotron, Button} from 'react-bootstrap';

import {useGetSessionDetails} from '../../../context/AuthContext';
import {useForm} from '../../../hooks/useForm';
import {loginApp} from '../../../helpers/fetchApi';

export const LoginForm = () => {
  const {isLogged, onLogin} = useGetSessionDetails();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
    rememberMail: false,
  });

  const {email, password, rememberMail} = formValues;

  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await loginApp(email, password);

    if (response.auth) {
      if (rememberMail) localStorage.setItem('token', response.tokenJWT);

      onLogin(response.tokenJWT);
    } else {
      setShowError(true);
    }
  };

  return (
    <React.Fragment>
      {!isLogged ? (
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
                          value={email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          placeholder="Password "
                          className="form-control form-input"
                          required
                          onFocus={() => setShowError(false)}
                          onChange={handleInputChange}
                        />
                      </div>
                      <Form.Check
                        inline
                        label="Remember"
                        id="lifestyle"
                        type="checkbox"
                        name="rememberMail"
                        value={rememberMail}
                        onChange={handleInputChange}
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
      ) : (
        <Redirect to="/adverts" />
      )}
    </React.Fragment>
  );
};
