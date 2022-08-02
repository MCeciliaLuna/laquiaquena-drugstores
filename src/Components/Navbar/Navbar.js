import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import imglogo from '../assets/images/hoja.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid pt-1">
    <Link className="logo-navbar-hover d-flex align-items-center" to="/">
      <img src={imglogo} alt="logo" className="logo-navbar p-1" />
      <h4 className="navbar-brand text-light fs-3 m-0 ps-1">LA QUIAQUEÑA</h4>
      </Link>
      <div className="">
      <form className="d-flex">
          <input className="buscador form-control me-2" type="search" maxLength="35" aria-label="Search" />
          <button className="btn buscar-button" type="submit"><ion-icon name="search-outline"></ion-icon></button>
        </form>
    </div>
        <div className="d-flex justify-content-end">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/productos" className="nav-link text-light fs-4" aria-current="page" href="/#">Productos</Link>
        </ul>
        </div>
      </div>
  </nav>
  );
};

export default Navbar;