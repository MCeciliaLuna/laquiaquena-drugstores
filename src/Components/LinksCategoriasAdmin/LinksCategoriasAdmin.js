import React from 'react';
import { Link } from 'react-router-dom';
import './LinksCategoriasAdmin.css'

const LinksCategoriasAdmin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos">Todos los productos</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/aceites">Aceites</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/capsulas">Cápsulas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/ensobre">En sobre</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/frascos">Frascos de vidrio</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/hierbas">Hierbas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/jabones">Jabones</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/jarabe">Jarabe</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/maca">Maca</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/nuezdelaindia">Nuez de la India</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/pomadas">Pomadas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/sahumerios">Sahumerios</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/stevia">Stevia</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/te">Té</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/yerbas">Yerbas</Link>
  <Link className="text-light mx-2 link-admin-categoria" to="/administrador/productos/otros">Otros</Link>
    </div>
  );
};

export default LinksCategoriasAdmin;