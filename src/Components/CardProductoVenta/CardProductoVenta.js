import axios from "axios";
import { useState, useEffect } from "react";
import '../CardProductoVenta/CardProductoVenta.css'
import ModalEditar from "../ModalEditar/ModalEditar";

const CardProductoVenta = ({productos = []}) => {

    const eliminarProducto = async (_id) => {
      await axios.delete(`https://laquiaquenadrugstoresbe.onrender.com/eliminarproducto/${_id}`)
      alert('Producto eliminado exitosamente')
      window.location.href = '/usuariologueado'
    }

    const aux = productos.sort((a,b) =>{
    
      if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0 })
  
    const [productosOrdenados, setProductosOrdenados] = useState([])
  
    useEffect(() => {
      setProductosOrdenados(aux)
    }, [aux])

  
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
            {
              productosOrdenados.map((item)=>
              <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
              <div className="card text-center">
              <img
                src={item.image.secure_url}
                className="card-img-top"
                alt="nombre"
              />
              <div className="card-body p-2">
                <h4 className="cardventa-titulo d-flex justify-content-center align-items-center card-title fw-bold">{item.nombre}</h4>
                <p className="cardventa-descripcion d-flex justify-content-center align-items-center card-text">{item.categoria}</p>
                <h5 className="fw-bold">${item.precio}</h5>
                  <div className="d-block">
                  <button
                    type="button"
                    id="botonEliminar"
                    className="btn boton-logueado-eliminar text-light mx-1"
                    onClick={(_id) => eliminarProducto(item._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </button>
                </div>
                </div>
              </div>
            </div>
            )
          }
          <ModalEditar/>

          </div>
  );
};

export default CardProductoVenta;