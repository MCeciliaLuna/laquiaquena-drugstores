import React from 'react';
import { useForm } from "react-hook-form";
import ModalRegistro from "../ModalRegistro/ModalRegistro";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = async (data) => {
    const resp = await fetch('https://laquiaquenadrugstoresbe.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json();
    
    try {
      if (json.usuario.role === "ADMIN") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.usuario.role);
        localStorage.setItem("usuario", JSON.stringify(json.usuario));
        window.location.href = "/administrador";
      } else if (json.usuario.role === "USER") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.usuario.role);
        localStorage.setItem("usuario", JSON.stringify(json.usuario));
        window.location.href = "/home";
      }
    } catch (error) {
      alert("El usuario o la contraseña que ingresaste no es correcto");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-center w-100 h-100">
    <div className="mb-0 pb-0">
      <div className="pb-2">
        <h3 className="text-title text-light">Bienvenido/a a</h3>
        <h1 className="text-title-principal text-light pb-2">
        🍃🔺DRUGSTORES LA QUIAQUEÑA🔺🍃
        </h1>
        <h4 className="text-registro text-light">
          Registrate para continuar:
        </h4>
      </div>
      <form
        className="d-flex flex-column justify-content-center align-items-center mt-1 mb-0"
        onSubmit={handleSubmit(handleLogin)}
      >
        <input
          type="email"
          className="form-control text-center input-login w-75"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="EMAIL"
          {...register("email", { require: true })}
          required
        />
        <input
          type="password"
          className="form-control text-center input-login mt-2 w-75"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          placeholder="CONTRASEÑA"
          {...register("contraseña", { require: true })}
          required
        />
        <button
          type="submit"
          className="boton-login btn border-0 text-light p-2 mt-2"
        >
          INGRESAR
        </button>
      </form>
      <ModalRegistro />
    </div>
  </div>
  );
};

export default Login;