import React from 'react';
import { useForm } from "react-hook-form";

const ButtonAgregarProducto = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const name in data) {
      if (name === "image") {
        formData.append(name, data[name][0]);
      } else {
        formData.append(name, data[name]);
      }
    }

    const resp = await fetch(
      "https://laquiaquenadrugstoresbe.onrender.com/crearproducto",
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await resp.json();
    alert("Producto creado exitosamente");
    window.location.href = "/usuariologueado";
  };
  return (
    <div>
    <div className="d-flex justify-content-center">
        <button
          type="button"
          className="botonagregarproducto text-center btn text-light p-3 mb-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          AGREGAR NUEVO PRODUCTO
        </button>
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
          <label
            for="disabledTextInput"
            className="fs-5 form-label text-light"
          >
            Nombre
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control input-nombreproducto"
            maxLength="40"
            placeholder="ingresá tipo + marca"
            {...register("nombre", { required: true })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="fs-5 form-label text-light">Categoría</label>
          <select
            className="form-select w-100 h-100"
            aria-label="Default select example"
            {...register("categoria", { required: true })}
            required
          >
            <option value="Categoría 1">Categoría 1</option>
            <option value="Categoría 2">Categoría 2</option>
            <option value="Categoría 3">Categoría 3</option>
            <option value="Categoría 4">Categoría 4</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            for="disabledTextInput"
            className="fs-5 form-label text-light"
          >
            Precio
          </label>
          <div className="d-flex">
            <p className="fs-5 m-1 pe-2">$</p>
            <input
              type="number"
              id="disabledTextInput"
              className="form-control w-50"
              {...register("precio")}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="fs-5 mb-1 text-light">Subir foto</label>
          <input
            type="file"
            className="btn p-1 d-block rounded-3 w-100 text-light"
            {...register("image", { required: true })}
            required
          />
        </div>
        <div className="modal-footer">
          <button type="submit" className="botoncrearproducto btn text-light">
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

export default ButtonAgregarProducto;