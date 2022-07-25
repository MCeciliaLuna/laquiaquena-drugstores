import React from 'react';
import './ProductosDestacados.css';
import {Link} from 'react-router-dom';

const ProductosDestacados = () => {
  return (
    <div className="productos-destacados">
      <div className="categorias d-flex justify-content-around align-items-center dropdown p-4">
      <h2 className="fs-1 pt-2 mb-0">PRODUCTOS DESTACADOS</h2>
  <button className="boton-categorias btn dropdown-toggle m-0 w-25" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Categorías
  </button>
  <ul className="dropdown-categorias dropdown-menu w-25" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/#">Action</a></li>
    <li><a className="dropdown-item" href="/#">Another action</a></li>
    <li><a className="dropdown-item" href="/#">Something else here</a></li>
  </ul>
</div>

<div className="card-group d-flex justify-content-evenly">
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=2" className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=1" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=3" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
  </div>
</a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=4" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=5" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=6" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=2" className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=1" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=3" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
  </div>
</a>
  <a href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=4" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </a>
</div>
<Link to="/productos">
<button className="btn btn-verproductos m-4 p-3"><strong>Ver todos los productos</strong></button>
</Link>
    </div>
  );
};

export default ProductosDestacados;