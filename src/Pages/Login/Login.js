import React from 'react';
import './Login.css';

const login = () => {
  return (
    <div className="login-page bg-light text-center position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
      <h2 className="text-login fs-1 pt-5 pb-2 d-block text-light">Logueate</h2>
      <form className="mt-0 mx-5">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="text-login fs-4 form-label w-100 text-light">Nombre de usuario</label>
    <input type="text" className="w-100 m-2 text-center rounded-3 border-0 p-2" placeholder="LaQuiaqueñaDrugstores" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="text-login fs-4 form-label w-100 text-light">Contraseña</label>
    <input type="password" className="w-100 m-2 text-center rounded-3 border-0 p-2" required />
  </div>
  <button type="submit" className="btn text-light">Entrar</button>
</form>
    </div>
    </div>
  );
};

export default login;
