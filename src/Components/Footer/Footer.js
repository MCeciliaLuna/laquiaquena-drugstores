import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import LogoDev from '../assets/images/logo-dev.ico'

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
          <h3 className="text-light text-contacto">Pcia. de Mendoza 2498 (Central)</h3>
          <h3 className="text-light text-contacto">Gral. Lavalle 1901</h3>
          <h3 className="text-light text-contacto">Gral. Belgrano 1991</h3>
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
          <button className="btn text-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg>
          </button>
        </Link>
      )}
      <div className="d-flex justify-content-evenly align-items-center">
      <h5 className="py-4 text-light mb-0">La Quiaqueña Drugstores | 2023</h5>
      <a href="https://mcecilialuna-dev.netlify.app/" target="_blank" rel='noreferrer' className="d-flex align-items-center text-light">
        <p className="m-0 p-0">Hecho por:</p>
        <img src={LogoDev} alt="logo" className="logo-img ms-2 py-2" />
      </a>
      </div>
    </div>
  );
};

export default Footer;