import React from 'react';
import './Buscador.css'

const Buscador = () => {
  return (
    <div className="">
      <form className="buscador d-flex justify-content-center px-5 py-2 fixed-top">
          <input className="form-control me-2 w-50" type="search" aria-label="Search" />
          <button className="btn btn-light" type="submit"><ion-icon name="search-outline"></ion-icon></button>
        </form>
    </div>
  );
};

export default Buscador;