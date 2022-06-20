import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="pt-4 align-items-center">
          <h3 className="">Contacto</h3>
      <div className="d-flex">
      <div className="mx-2 d-inline">
      <iframe title="mapas" src="https://www.google.com/maps/d/embed?mid=1Fh5MQu9cVwJvKqGwBzNVdepmaVPAqGA&ehbc=2E312F" width="500" height="350"></iframe>
    </div>

    <form className="w-50">
      <label className="d-block pb-1">Nombre</label>
      <input type="text" className="w-" />
      <label className="d-block pb-1">Email de contacto</label>
      <input type="email" className="w-50" />
      <label className="d-block pb-1">Mensaje</label>
      <textarea name="mensaje" id="mensaje" cols="30" rows="5" class="cuadro-mensaje p-1 w-50" required></textarea>
    </form>
    </div>
    </div>
  );
};

export default Contacto;