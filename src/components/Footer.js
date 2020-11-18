import React from 'react';

function Footer() {
  return (
    <React.Fragment>
      <footer className="container footer-page p-4 footer">
        <div className="card text-center">
          <div className="card-header">'Exercise'</div>
          <div className="card-body">
            <h5 className="card-title">
              'Practice 5 Backend Development with JavaScript. Bootcamp IX Keepcoding'
            </h5>
            <p className="card-text">
              'Author: Francisco Javier Antúnez Durán aka anbreaker'
            </p>
            <a
              href="https://github.com/anbreaker/practica5DesarrolloBackendAvanzado"
              className="btn btn-outline-success">
              'Go to Github Project'
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
