import React from "react";
import { useForm } from "react-hook-form";
import '../ModalEditar/ModalEditar.css'

const ModalEditar = (_id) => {
  const { register, handleSubmit } = useForm();
  
  return (
<div>
    <div className="d-flex justify-content-center">
        <button
          type="button"
          className="botonmodificarproducto text-center btn text-light mx-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
        </button>
      </div>

<div
className="modal fade"
id="exampleModal1"
tabindex="-1"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>
<div className="modal-dialog">
  <div className="modal-content fondo-modal-editar">
    <div className="modal-header">
      <h5 className="modal-title text-light" id="exampleModalLabel">
        Editar producto
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div className="modal-body">
      <form onSubmit={handleSubmit()} id="form">
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
          <button type="submit" className="botonmodificarrproducto btn text-light">
          Modificar producto
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

export default ModalEditar;