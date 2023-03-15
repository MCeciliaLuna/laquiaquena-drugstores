import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="footer pb-2">
      {isHomePage && (
        <Link to="/login" className="d-flex justify-content-center">
          <h5 className="btn boton-administrador text-light fs-6 mt-2 mb-0">
            Administrador
          </h5>
        </Link>
      )}
      <h5 className="pt-4 pb-2 text-light">Todos los derechos reservados a La Quiaqueña Drugstores | 2022</h5>
    </div>
  );
};

export default Footer;