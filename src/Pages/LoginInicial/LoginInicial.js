import React from 'react';
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp';
import ModalRegistro from '../../Components/ModalRegistro/ModalRegistro';

const LoginInicial = () => {
  return (
    <>
    <BotonWhatsapp />
    <div className="d-flex justify-content-center">
      <form className="w-50 p-5 m-5">
    <h1 className="text-light">Bienvenido a <br/> LA QUIAQUEÑA DRUGSTORES</h1>
    <h5 className="text-light">Registrate para continuar</h5>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-light">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-light">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="btn border-0 text-light">Ingresar</button>
  <ModalRegistro />
</form>
    </div>
    </>
  );
};

export default LoginInicial;