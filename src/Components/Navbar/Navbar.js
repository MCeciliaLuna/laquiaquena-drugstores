import React from 'react';
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom';
import imglogo from '../assets/images/hoja.png'

const Navbar = () => {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/administrador';
  const cerrarSesion = () => {
    if (window.confirm("¿Segur@ que quieres cerrar sesión del panel de ADMINSTRACIÓN?")) {
      window.location.href = "/login"
  }}

  const clickLogo = () => {
      sessionStorage.clear('pedido')
  }

  return (
    <nav className="navbar navbar-expand-lg">
      {isHomePage && (
          <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" onClick={cerrarSesion} class="salir-icon text-light pb-0 ms-3 my-3 bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
      )}
    <div className="container-fluid">
      <Link to="/">
    <div className="logo-navbar-hover d-flex align-items-center" onClick={clickLogo}>
      <img src={imglogo} alt="logo" className="logo-navbar p-1" />
      <h4 className="navbar-brand text-light fs-3 m-0 ps-1">LA QUIAQUEÑA</h4>
      </div>
      </Link>
      <div className="d-flex justify-content-center" id="navbarSupportedContent">
            <p className="nombre-navbar text-light fs-5 ms-4 mb-0 pb-0">Bienvenido/a! 👋</p>
      </div>
        <div className="d-flex justify-content-end">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/productos" className="nav-link text-light fs-4" aria-current="page">Productos</Link>
        </ul>
        </div>
      </div>
  </nav>
  );
};

export default Navbar;