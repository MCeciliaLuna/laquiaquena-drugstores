import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid pt-1">
      <Link className="navbar-brand text-light" to="/">La Quiaqueña Drugstores</Link>
        <div className="d-flex justify-content-end">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/productos" className="nav-link text-light" aria-current="page" href="/#">Productos</Link>
        </ul>
        </div>
      </div>
  </nav>
  );
};

export default Navbar;