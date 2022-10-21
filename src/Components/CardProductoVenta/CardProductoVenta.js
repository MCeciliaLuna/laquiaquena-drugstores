import axios from "axios";
import { useState, useEffect } from "react";
import '../CardProductoVenta/CardProductoVenta.css'

const CardProductoVenta = ({productos = []}) => {

    const eliminarProducto = async (_id) => {
      await axios.delete(`https://laquiaquenaherboristeriabe.onrender.com/eliminarproducto/${_id}`)
      alert('Producto eliminado exitosamente')
      window.location.replace('/usuariologueado')
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
              productosOrdenados.map((item, index)=>
              <div className="card-producto d-flex justify-content-center p-0 m-3 col-2">
              <div className="card text-center">
              <img
                src={item.image.secure_url}
                className="card-img-top"
                alt="nombre"
              />
              <div className="card-body p-2">
                <h4 className="cardventa-titulo d-flex justify-content-center align-items-center card-title mt-3 pt-1 mb-0">{item.nombre}</h4>
                <p className="cardventa-descripcion d-flex justify-content-center align-items-center card-text m-0 p-1">{item.descripcion}</p>
                {/* <h5 className="card-text py-2 m-0"> ${item.precio}</h5> */}
                
                  <div className="d-block">
                  {/* <button
                    type="button"
                    className="boton-logueado-editar btn text-light m-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Editar
                  </button> */}
                  <button
                    type="button"
                    id="botonEliminar"
                    className="btn boton-logueado-eliminar text-light mx-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    onClick={(_id) => eliminarProducto(item._id)}
                  >
                    Eliminar
                  </button>
                </div>
                </div>
              </div>
            </div>
            
              )
            }

          </div>
  );
};

export default CardProductoVenta;