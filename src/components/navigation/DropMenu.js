import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import {AuthContext, GetSessionDetails} from '../../context/AuthContext';
import '../general.css';

export const DropMenu = () => {
  const {isLogged} = GetSessionDetails();
  const {onLogout} = AuthContext;

  return (
    <Dropdown>
      <Dropdown.Toggle className="btn btn-secondary btn-dark" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/">
          Home
        </Dropdown.Item>

        {isLogged && (
          <Dropdown.Item as={Link} to="/adverts" className="underline">
            User Session
          </Dropdown.Item>
        )}
        {isLogged && (
          <Dropdown.Item as={Link} to="/filter" className="underline">
            Filter ads
          </Dropdown.Item>
        )}
        {isLogged && (
          <Dropdown.Item as={Link} to="/new-advert" className="underline">
            New Advert
          </Dropdown.Item>
        )}
        {!isLogged && (
          <Dropdown.Item as={Link} to="/new-advert" className="underline">
            Log In
          </Dropdown.Item>
        )}
        {isLogged && (
          <Dropdown.Item as={Link} to="/" className="underline" onClick={onLogout}>
            Log out
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
