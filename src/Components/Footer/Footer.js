import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="pt-4 pb-2 text-light">Todos los derechos reservados a La Quiaqueña Drugstores | 2022</h5>
      <a href="/login">
      <p className="pb-4 mb-0 text-light"><i>Logueo del Administrador</i></p>
      </a>
    </div>
  );
};

export default Footer;