import React from 'react';
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom';
import imglogo from '../assets/images/hoja.png'

const Navbar = () => {

  const location = useLocation();
  const isAuthorizedPage = location.pathname === '/' || location.pathname === '/productos' || location.pathname === '/mipedido';

  const clickLogo = () => {
      if (window.confirm("¿Segur@ que quieres volver a la página inicial?")) {
        window.location.href = "/"
        sessionStorage.clear();
    }}

  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <div className="logo-navbar-hover d-flex align-items-center" onClick={clickLogo}>
      <img src={imglogo} alt="logo" className="logo-navbar p-1" />
      <h4 className="navbar-brand text-light fs-3 m-0 ps-1">LA QUIAQUEÑA</h4>
      </div>
      <div className="d-flex justify-content-center" id="navbarSupportedContent">
            <p className="nombre-navbar text-light fs-5 ms-4 mb-0 pb-0">Bienvenido/a! 👋</p>
      </div>
      {isAuthorizedPage && (
        <div className="d-flex justify-content-end">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/productos" className="nav-link text-light fs-4" aria-current="page">Productos</Link>
          </ul>
        </div>
      )}
      </div>
  </nav>
  );
};

export default Navbar;