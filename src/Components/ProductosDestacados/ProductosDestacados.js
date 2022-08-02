import React from 'react';
import './ProductosDestacados.css';
import {Link} from 'react-router-dom';

const ProductosDestacados = () => {
  return (
    <div className="productos-destacados">
      <div className="categorias d-flex justify-content-around align-items-center p-4">
      <h2 className="title-productos-destacados fs-1 mb-0">PRODUCTOS DESTACADOS</h2>
</div>

<div className="card-group d-flex justify-content-evenly">
  <div className="col-2 card-producto m-3">
    <img src="https://picsum.photos/300?random=2" className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=1" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=3" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
  </div>
</div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=4" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=5" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=6" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=2" className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=1" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=3" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
  </div>
</div>
  <div href="/#" className="col-2 card-producto m-3 border-0 rounded-3">
    <img src="https://picsum.photos/300?random=4" className="card-img-top" alt="..." />
    <div className="card-body">
    <h4 className="card-title title-producto fw-bold">Nombre Producto</h4>
      <p className="card-text">Marca</p>
      <h5 className="card-text">Precio</h5>
      <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
    </div>
  </div>
</div>
<Link to="/productos">
<button className="btn btn-verproductos m-4 p-3"><strong>Ver todos los productos</strong></button>
</Link>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title titulo-modal-producto" id="exampleModalLabel">Nombre Producto</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="text-center p-3">
      <img src="https://picsum.photos/400/?random=16" className="card-img" alt="..." />
      <div className="card-body p-2">
        <p className="card-title m-0 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h4 className="card-text py-2 m-0">Precio</h4>
        <a href="https://wa.me/c/5493812183467" target="new">
        <button type="button" className="boton-productos-destacados btn text-light p-3 w-50">Comprar</button>
        </a>
        
        </div>
  </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductosDestacados;