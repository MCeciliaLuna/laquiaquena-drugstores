import React from 'react';
import './ProductosDestacados.css';

const ProductosDestacados = () => {
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center dropdown pb-0">
      <h4>Productos destacados</h4>
  <button className="btn btn-secondary dropdown-toggle m-2 w-25" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Categorías
  </button>
  <ul className="dropdown-menu w-25" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/#">Action</a></li>
    <li><a className="dropdown-item" href="/#">Another action</a></li>
    <li><a className="dropdown-item" href="/#">Something else here</a></li>
  </ul>
</div>

<div className="card-group">
  <div className="card card-producto m-1 border">
    <img src="https://picsum.photos/300?random=2" className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title title-producto">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </div>
  <div className="card card-producto m-1 border">
    <img src="https://picsum.photos/300?random=1" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </div>
  <div className="card card-producto m-1 border">
    <img src="https://picsum.photos/300?random=3" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
  </div>
</div>
  <div className="card card-producto m-1 border">
    <img src="https://picsum.photos/300?random=4" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </div>
  <div className="card card-producto m-1 border">
    <img src="https://picsum.photos/300?random=5" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </div>
  <div className="card card-producto m-1 border">
    <img src="https://picsum.photos/300?random=6" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
    </div>
  </div>
</div>
<button className="btn btn-warning mt-2 mb-3 px-5"><strong>Ver todos los productos</strong></button>
    </div>
  );
};

export default ProductosDestacados;