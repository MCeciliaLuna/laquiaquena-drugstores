import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ModalRegistro = () => {
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [agregarUsuario, setAgregarUsuario] = useState();
  
    const onSubmit = async (data) => {
      await axios
        .post(
          "https://laquiaquenadrugstoresbe.onrender.com/crearusuario",
          data
        )
        .then((resp) => {
          setAgregarUsuario(resp.data);
        });
      alert(
        "El usuario ha sido creado exitosamente. Ahora ingresá con él a nuestra plataforma"
      );
      window.location.reload();
    };
    return (
    <>
      <button
        type="button"
        className="btn mt-3 p-2 mx-5 text-light boton-login button-registro"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        CREAR USUARIO
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-modal">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 text-light"
                id="exampleModalLabel"
              >
                CREÁ TU USUARIO 😎
              </h1>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="input-registro form-control mt-1"
                    placeholder="NOMBRE"
                    {...register("nombre", {
                      required: true,
                      maxLength: 20,
                      minLength: 1,
                    })}
                    required
                    maxLength="20"
                    minLength="3"
                  />
                  <input
                    type="text"
                    className="input-registro form-control mt-3"
                    placeholder="APELLIDO"
                    {...register("apellido", {
                      required: true,
                      maxLength: 35,
                      minLength: 1,
                    })}
                    required
                    maxLength="35"
                    minLength="3"
                  />
                  <input
                    type="text"
                    className="input-registro form-control mt-3"
                    placeholder="DIRECCIÓN"
                    {...register("direccion", {
                      required: true,
                      maxLength: 50,
                      minLength: 5,
                    })}
                    required
                    maxLength="50"
                    minLength="5"
                  />
                  <input
                    type="number"
                    className="input-registro form-control mt-3"
                    placeholder="TELÉFONO"
                    {...register("telefono", {
                      required: true,
                      maxLength: 20,
                      minLength: 9,
                    })}
                    required
                    maxLength="20"
                    minLength="9"
                  />
                  {errors.telefono && (
                    <span className="text-light mb-5">
                      ⚠️ El número ingresado es demasiado corto. Ingréselo con
                      código de área
                    </span>
                  )}
                  <input
                    type="email"
                    className="input-registro form-control mt-3"
                    placeholder="EMAIL"
                    {...register("email", {
                      required: true,
                      maxLength: 50,
                      minLength: 10,
                      pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    })}
                    required
                    maxLength="50"
                    minLength="10"
                  />
                  {errors.email && (
                    <span className="text-light mb-5">
                      ⚠️ Debe respetar el formato nombre@mail.com
                    </span>
                  )}
                  <input
                    type="password"
                    className="input-registro form-control mt-3"
                    placeholder="CONTRASEÑA"
                    {...register("contraseña", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    })}
                    required
                    maxLength="20"
                    minLength="8"
                  />
                  {errors.contraseña && (
                    <span className="text-light mb-5">
                      ⚠️ Debe tener al menos 1 dígito, 1 mayúscula y 1 minúscula
                    </span>
                  )}
                </div>
                <select
                    className="form-select input-registro form-control mb-3"
                    aria-label="Default select example"
                    {...register("drugstore", { required: true })}
                    required
                  >
                    <option value="Drugstore 1" selected>Drugstore 1</option>
                    <option value="Drugstore 2">Drugstore 2</option>
                    <option value="Drugstore 3">Drugstore 3</option>
                  </select>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="boton-modal-registro btn-volver-modal btn btn-secondary me-1 border-0"
                    data-bs-dismiss="modal"
                  >
                    VOLVER
                  </button>
                  <button type="submit" className="boton-modal-registro btn-crear-modal btn border-0 text-light">
                    CREAR USUARIO
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRegistro;