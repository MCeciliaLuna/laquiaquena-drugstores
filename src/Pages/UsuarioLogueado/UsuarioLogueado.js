import React from 'react';
import './UsuarioLogueado.css';
import { Link } from 'react-router-dom';

const UsuarioLogueado = () => {
  return (
    <div className="page-usuariologueado bg-light">
      <h2 className="text-center p-3">Page UsuarioLogueado</h2>
      <div className="d-flex justify-content-center">
<button type="button" className="text-center btn text-light p-3 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
  AGREGAR NUEVO PRODUCTO
</button>
</div>
<div className="d-flex">
<div className="w-25 bg-light py-5 ps-5 categorias-productos">
      <ul className="list-group list-group-flush w-100">
      <Link to="/productos" className="list-group-item bg-light">Todos los productos</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Stevia</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Hierbas</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Harinas</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Maca</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Nuez de la india</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Pomadas</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Jarabe</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Jabones</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Té</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Aceites</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Sahumerios</Link>
  <Link to="/productos" className="categoria-visitada list-group-item bg-light">Indumentaria</Link>
</ul>
</div>
<div className="div-productos-page w-75 d-flex flex-wrap align-items-center justify-content-center">
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=55" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=56" className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=57" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=58" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=59" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=60" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=61" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
    <div className="card text-center">
      <img src="https://picsum.photos/400/?random=62" className="card-img-top" alt="..." />
      <div className="card-body p-2">
      <h4 className="card-title py-1 m-0">Card title</h4>
        <p className="card-text py-2 m-0">Descripción</p>
        <h5 className="card-text py-2 m-0">Precio</h5>
        <div className="text-center">
        <button type="button" className="boton-productos-destacados btn bg-warning text-light mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
        <button type="button" className="btn bg-danger text-light mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Eliminar
        </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Nuevo producto</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
    <div className="mb-3">
      <label for="disabledTextInput" className="fs-5 form-label">Nombre</label>
      <input type="text" id="disabledTextInput" className="form-control" />
    </div>
    <div className="mb-3">
      <label for="disabledSelect" className="fs-5 form-label">Categoría</label>
      <select id="disabledSelect" className="form-select">
        <option>Categoría 1</option>
        <option>Categoría 2</option>
        <option>Categoría 3</option>
        <option>Categoría 4</option>
      </select>
    </div>
    <div className="mb-3">
      <label for="disabledTextInput" className="fs-5 form-label">Precio</label>
     <div className="d-flex">
      <p className="fs-5 m-1 pe-2">$</p>
      <input type="number" id="disabledTextInput" className="form-control w-50" />
      </div>
    </div>
    <div className="mb-3">
      <label className="fs-5 mb-1">Subir foto</label>
      <input type="file" className="p-1 d-block rounded-3 w-100" id="" />
    </div>
      <div className="modal-footer">
        <button type="button" className="btn text-light">Crear producto</button>
      </div>
</form>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
    <div className="mb-3">
      <label for="disabledTextInput" className="fs-5 form-label">Nombre</label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Nombre existente" />
    </div>
    <div className="mb-3">
      <label for="disabledSelect" className="fs-5 form-label">Categoría</label>
      <select id="disabledSelect" className="form-select">
        <option>Categoría 1</option>
        <option>Categoría 2</option>
        <option>Categoría 3</option>
        <option>Categoría 4</option>
      </select>
    </div>
    <div className="mb-3">
      <label for="disabledTextInput" className="fs-5 form-label">Precio</label>
     <div className="d-flex">
      <p className="fs-5 m-1 pe-2">$</p>
      <input type="number" id="disabledTextInput" className="form-control w-50" placeholder="1234"/>
      </div>
    </div>
    <div className="mb-3">
      <label className="fs-5 mb-1">Subir foto</label>
      <input type="file" className="p-1 d-block rounded-3 w-100" id="" />
    </div>
    <div className="modal-footer">
        <button type="button" className="btn text-light">Modificar producto</button>
      </div>
</form>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Eliminar</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h4>¿Estás segur@ de eliminar <b className="text-danger">nombre del producto</b>?</h4>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn bg-danger text-light">Eliminar</button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default UsuarioLogueado;