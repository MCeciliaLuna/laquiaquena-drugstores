import React from 'react';
import './CardProductoPublico.css'


const CardProductoPublico = ({producto, setPedido, pedido}) => {
  
  
  const pedidoArray = () => {
    const productoPedido = { 
      nombre: producto.nombre,
      precio: producto.precio
    }

    if (window.confirm(`¿Segur@ que 𝗔𝗚𝗥𝗘𝗚𝗔𝗥 𝗔𝗟 𝗣𝗘𝗗𝗜𝗗𝗢 ${producto.nombre}? 🤔🌿`)) {
      setPedido(prevPedido => {
        const nuevoPedido = [...prevPedido, productoPedido];
        localStorage.setItem("pedido", JSON.stringify(nuevoPedido));
        return nuevoPedido;
      });
    }
  };

  return (
    <>
    <form className="card-producto d-flex justify-content-center align-items-around mx-2 mb-3 mt-3 rounded-3">
    <div className="bg-light text-center card-productoventa h-auto p-2 rounded-3">
    <img
      src={producto.image.secure_url}
      className="card-img-top"
      alt="nombre"
    />
    <div className="card-body">
      <h4 className="cardventa-titulo d-flex justify-content-center align-items-center card-title">{producto.nombre}</h4>
      <p className="text-muted text-categoria d-flex align-items-center justify-content-center"><i>{producto.categoria}</i></p>
      <h5 className="text-precio bg-light p-1 m-0 rounded-0 border-0 fs-5 text-center">${producto.precio}</h5>
      <div className="d-flex align-items-center justify-content-around">
              <button
              value={producto}
              onClick={pedidoArray}
                  id="producto"
                  type='button'
                  className="btn button-destacados-comprar text-light mt-3 align-items-end"
                > 
                  Comprar
                </button>
            </div>
          </div>
        </div>
        </form>
        </>
  );
};

export default CardProductoPublico;