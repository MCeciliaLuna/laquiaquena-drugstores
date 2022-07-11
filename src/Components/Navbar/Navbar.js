import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">La Quiaqueña Drugstores</Link>
        <div className="d-flex justify-content-end">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/productos" className="nav-link active" aria-current="page" href="/#">Productos</Link>
        </ul>
        </div>
      </div>
  </nav>
  );
};

export default Navbar;