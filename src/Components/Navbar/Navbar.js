import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import imglogo from '../assets/images/hoja.png'

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const volverLoginInicial = () => {
    if (
      window.confirm(`${usuario.nombre} ☺, ¿Volvemos a la 𝗣𝗔́𝗚𝗜𝗡𝗔 𝗜𝗡𝗜𝗖𝗜𝗔𝗟 🤔?`)
    ) {
      window.location.href = "/";
    }
  }

  const usuarioNombre = JSON.stringify(`${usuario.nombre} ${usuario.apellido}`).replace(
    /['"]+/g,
    ""
  );
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid pt-1">
    <div className="logo-navbar-hover d-flex align-items-center" onClick={volverLoginInicial}>
      <img src={imglogo} alt="logo" className="logo-navbar p-1" />
      <h4 className="navbar-brand text-light fs-3 m-0 ps-1">LA QUIAQUEÑA</h4>
      </div>
      <div className="d-flex justify-content-center" id="navbarSupportedContent">
            <p className="nombre-navbar text-light fs-5 mb-0 pb-0">Bienvenido/a {usuarioNombre} 👋</p>
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