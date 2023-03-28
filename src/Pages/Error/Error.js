import React from 'react';

const Error = () => {
  localStorage.removeItem('access-token');
  return (
    <div className="postpedido-page position-relative">
      <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle div-pedido">
      <h1 className="text-light">¡UPS! NO ENCONTRAMOS LA PÁGINA QUE BUSCABAS</h1>
      <a href="/" className="w-100">
      <button className="btn-pospedido btn w-75 mt-2 text-light">
      <h2 className="p-1 mb-0">
        Volver a página principal
        </h2>
        </button>
      </a>
    </div>
    </div>
  );
};

export default Error;