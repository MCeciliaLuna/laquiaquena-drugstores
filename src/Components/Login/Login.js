import React from 'react';
import { useForm } from "react-hook-form";

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
    
    if (json.token){
    localStorage.setItem('access-token', json.token)
      window.location.href = '/usuariologueado'
    } else {
      alert('El usuario o la contraseña que ingresaste no es correcto')
    }
  }

  return (
    <form className="mt-0 mx-1" onSubmit={handleSubmit(handleLogin)}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="text-login fs-4 form-label w-100 text-light">Nombre de usuario</label>
    <input type="text" className="input-logueo w-100 m-2 text-center rounded-3 border-0 p-2" placeholder="LaQuiaqueñaHerboristeria" {...register("nombre", { require: true })} required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="text-login fs-4 form-label w-100 text-light">Contraseña</label>
    <input type="password" className="input-logueo w-100 m-2 text-center rounded-3 border-0 p-2" {...register("contraseña",  { require: true }) } required />
  </div>
  <button type="submit" className="buttonlogin btn text-light mb-3">Entrar</button>
</form>
  );
};

export default Login;