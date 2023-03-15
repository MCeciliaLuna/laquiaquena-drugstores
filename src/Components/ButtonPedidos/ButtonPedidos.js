import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonPedidos.css'

const ButtonPedidos = () => {
  return (
    <>
    <Link to="/mipedido">
      <button type="button" className="btn border-0 text-light btn-flotante-pedidos p-2">Ver mi pedido</button>
      </Link>
    </>
  );
};

export default ButtonPedidos;