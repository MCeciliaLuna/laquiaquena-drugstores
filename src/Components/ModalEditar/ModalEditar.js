import { useForm } from "react-hook-form";
import "./ModalEditar.css";
import { useState } from "react";
import axios from "axios";

const ModalEditar = ({ producto, id }) => {
  const { register, handleSubmit } = useForm();
  const [editarProducto, setEditarProducto] = useState();

  const idProductoEdit = `#producto${id}`;
  const productoIdModalEdit = `producto${id}`;

  const editProducto = async (data) => {
    if (
      window.confirm(`📣 ¿𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗠𝗢𝗦 a ${producto.nombre}? 🤔`)
    ) {
      await axios.put("https://laquiaquenadrugstoresbe.onrender.com/modificarproducto", data);
      setEditarProducto(data);
      alert(`${producto.nombre} 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗗𝗢 𝗘𝗫𝗜𝗧𝗢𝗦𝗔𝗠𝗘𝗡𝗧𝗘 ✅😉`);
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button" class="btn" data-bs-toggle="modal" data-bs-target={idProductoEdit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-pencil-fill text-light"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </button>
      <div
        class="modal fade" id={productoIdModalEdit} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content fondo-modal-editar" >
            <div className="modal-header">
              <h4 className="modal-title text-light" id="exampleModalLabel1">
                EDITAR PRODUCTO 📝
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="form" onSubmit={handleSubmit(editProducto)}>
                  <input
                    type="text"
                    value={producto._id}
                    {...register("_id", { required: true })}
                    className="d-none"
                  />
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control text-input-editar mb-3"
                    maxLength="40"
                    defaultValue={producto.nombre}
                    {...register("nombre", { required: true })}
                    required
                  />
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={producto.categoria}
                    {...register("categoria", { required: true })}
                    required
                  >
                     <option value="Almacén">Almacén</option>
                  <option value="Artículos de limpieza">Artículos de limpieza</option>
                  <option value="Bico saborizados">Bico saborizados</option>
                  <option value="Higiene personal">Higiene personal</option>
                  <option value="Hoja de coca">Hoja de coca</option>
                  <option value="Repelentes">Repelentes</option>
                  <option value="Otros">Otros</option>
                  </select>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center input-center">
                      <p className="text-light fs-5 m-2">$</p>
                      <input
                        type="number"
                        id="disabledTextInput"
                        className="form-control text-input-editar"
                        maxLength="10"
                        defaultValue={producto.precio}
                        {...register("precio", { required: true })}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
            <button type="submit" className="btn rounded-circle m-0 p-2 bg-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
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
