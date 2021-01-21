import React from 'react';

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="container footer-page p-4 footer">
        <div className="card text-center">
          <div className="card-header">Exercise</div>
          <div className="card-body">
            <h5 className="card-title">
              Practice 6 Frontend Development with React. Bootcamp IX Keepcoding
            </h5>
            <p className="card-text">
              Author: Francisco Javier Antúnez Durán aka anbreaker
            </p>
            <a
              href="https://github.com/anbreaker/practica6FundamentosReact"
              className="btn btn-outline-success">
              Go to Github Project
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
