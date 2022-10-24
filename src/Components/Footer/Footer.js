import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="pt-4 pb-2 text-light">Todos los derechos reservados a La Quiaqueña Drugstores | 2022</h5>
      <Link to="/login">
      <p className="pb-4 mb-0 text-light"><i>Logueo del Administrador</i></p>
      </Link>
    </div>
  );
};

export default Footer;