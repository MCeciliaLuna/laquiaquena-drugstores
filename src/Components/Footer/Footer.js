import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="footer">
      <div className="py-3 px-0 d-flex justify-content-center align-items-center">
        <div className="ps-0 ms-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="m-3 text-light bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
          <h3 className="text-light text-contacto">San Miguel de Tucumán, Tucumán, Argentina</h3>
          <h3 className="text-light text-contacto">Mendoza 2498 (Central)</h3>
          <h3 className="text-light text-contacto">Lavalle 1901</h3>
          <h3 className="text-light text-contacto">Belgrano 1991</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-center m-3 text-light bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
<br />
          <a href="tel:+543816613960" className="text-light f-3 text-contacto d-block">
            <h3>381 6613960</h3></a>
          </div>
    </div>
      {isHomePage && (
        <Link to="/login" className="d-flex justify-content-center">
          <h5 className="btn boton-administrador text-light fs-6 mt-2 mb-0">
            Administrador
          </h5>
        </Link>
      )}
      <h5 className="py-4 text-light">Todos los derechos reservados a La Quiaqueña Drugstores | 2023</h5>
    </div>
  );
};

export default Footer;