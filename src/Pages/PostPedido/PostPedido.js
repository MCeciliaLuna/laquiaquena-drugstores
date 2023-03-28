import React from 'react';
import './PostPedido.css'

const PostPedido = () => {
  return (
    <div className="postpedido-page position-relative">
      <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle div-pedido ">
      <h1 className="text-center text-light">¡TU PEDIDO HA SIDO ENVIADO CON ÉXITO!</h1>
      <a href="https://wa.me/5493816613960" target="new" className="w-100">
      <button className="btn-pospedido btn w-75 text-light ">
        <h2 className="p-1 mb-0">
        Envianos un whatsapp
        </h2>
        </button>
      </a>
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

export default PostPedido;