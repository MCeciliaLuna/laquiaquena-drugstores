import "./UsuarioLogueado.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoVenta from "../../Components/CardProductoVenta/CardProductoVenta";

const UsuarioLogueado = () => {
  const token = localStorage.getItem('access-token')
  if (!token) {
    window.location.href = '/'
  }
  
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get('https://laquiaquenadrugstoresbe.onrender.com/traerproductos');
      setProductos(info.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])


  const { register, handleSubmit} = useForm()
  const onSubmit = async (data) => {
    const formData = new FormData()
  
    for(const name in data) {
      if (name === 'image') {
        formData.append(name, data[name][0])
      } else {
        formData.append(name, data[name])
      }
    }

    const resp = await fetch('https://laquiaquenadrugstoresbe.onrender.com/crearproducto',
    {
    method: 'POST',
    body: formData
    }
    )
    const json = await resp.json();
      alert('Producto creado exitosamente')
      window.location.href = '/usuariologueado'
  }

  return (
    <div className="page-usuariologueado pt-5">
      <div className="w-100">
      <h2 className="title-logueado text-center pt-3 d-block text-light">¡Bienvenidos/as!</h2>
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
        </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="text-center btn text-light p-3 mb-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          AGREGAR NUEVO PRODUCTO
        </button>
      </div>
      <div className="d-flex">
        <div className="div-productos-page">
          <CardProductoVenta productos={productos} />
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content fondo-modal-logueado">
            <div className="modal-header">
              <h5 className="modal-title text-light" id="exampleModalLabel">
                Nuevo producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)} id="form">
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label text-light">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control input-nombreproducto"
                    maxLength="40"
                    placeholder="ingresá tipo + marca"
                    {...register("nombre", { required: true })} required
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label text-light">
                    Categoria
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    maxLength="50"
                    placeholder="seleccioná una categoría"
                    {...register("categoria", { required: true })} required
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" className="fs-5 form-label text-light">
                    Precio
                  </label>
                  <div className="d-flex">
                    <p className="fs-5 m-1 pe-2">$</p>
                    <input
                      type="number"
                      id="disabledTextInput"
                      className="form-control w-50"
                      {...register("precio")} required
                    />
                  </div>
                </div>
                 <div className="mb-3">
                  <label className="fs-5 mb-1 text-light">Subir foto</label>
                  <input
                    type="file"
                    className="btn p-1 d-block rounded-3 w-100"
                    {...register("image", { required: true })} required
                   />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn text-light">
                    Crear producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioLogueado;
