import React from 'react';

const ButtonSalirSesion = () => {
  return (
    <div className="d-block text-center w-100 mb-3">
          <a href="/">
            <button
              id="cerrarsesionbtn"
              type="button"
              className="btn text-light botonsalirsesion"
            >
              Salir
            </button>
          </a>
        </div>
  );
};

export default ButtonSalirSesion;